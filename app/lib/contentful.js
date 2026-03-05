import { createClient } from "contentful";

if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error("Missing required Contentful environment variables");
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

export default client;

// --- Server-side data fetching functions ---

export async function getEvents() {
  const response = await client.getEntries({
    content_type: "event",
    order: ["-fields.dateAndTime"],
  });

  return response.items.map((event) => ({
    id: event.sys.id,
    title: event.fields.title,
    slug: event.fields.slug,
    description: event.fields.description,
    dateAndTime: event.fields.dateAndTime,
    image: event.fields.image?.fields?.file?.url
      ? `https:${event.fields.image.fields.file.url}`
      : null,
    url: event.fields.url || null,
    location: event.fields.location,
    rsvpLink: event.fields.rsvpLink,
  }));
}

export async function getTeamLeads() {
  const response = await client.getEntries({
    content_type: "teamMember",
    order: ["sys.createdAt"],
  });

  const rolePriority = (role = "") => {
    const r = role.toLowerCase().trim();

    if (r === "gdgoc lead") return 0;
    if (r.includes("chairperson")) return 1;
    if (r.includes("co-lead")) return 2;
    if (r.includes("lead")) return 3;
    if (r.includes("head")) return 4;

    return 5;
  };

  return response.items
    .map((member) => ({
      id: member.sys.id,
      name: member.fields.name,
      role: member.fields.role,
      image: member.fields.image?.fields?.file?.url
        ? `https:${member.fields.image.fields.file.url}`
        : null,
      github: member.fields.github,
      linkedin: member.fields.linkedin,
      twitterinstagram: member.fields.twitterinstagram,
    }))
    .filter((member) => {
      const r = member.role?.toLowerCase() || "";

      return (
        r.includes("lead") ||
        r.includes("head") ||
        r.includes("chairperson") ||
        r.includes("chair")
      );
    })
    .sort((firstMember, secondMember) => {
      return rolePriority(firstMember.role) - rolePriority(secondMember.role);
    });
}

export async function getBlogs() {
  const response = await client.getEntries({
    content_type: "blogs",
  });

  return response.items.map((blog) => ({
    id: blog.sys.id,
    blogTitle: blog.fields.blogTitle,
    author: blog.fields.author,
    url: blog.fields.url,
  }));
}

export async function getTeamData() {
  const response = await client.getEntries({
    content_type: "teamYear",
    include: 2,
  });

  if (!response.items || response.items.length === 0) {
    return [];
  }

  const teamYearEntry = response.items[0];

  const departments = teamYearEntry.fields.departments
    ?.map((department) => {
      if (!department.fields) return null;

      const members = department.fields.members
        ?.map((member) => {
          if (!member.fields) return null;

          const imageUrl = member.fields.image?.fields?.file?.url || null;

          return {
            id: member.sys.id,
            name: member.fields.name || "",
            role: member.fields.role || "",
            image: imageUrl ? `https:${imageUrl}` : null,
            github: member.fields.github || "",
            linkedin: member.fields.linkedin || "",
            twitterinstagram: member.fields.twitterinstagram || "",
          };
        })
        .filter(Boolean);

      return {
        name: department.fields.name || "",
        members: members || [],
      };
    })
    .filter(Boolean);

  return [
    {
      year: teamYearEntry.fields.year || "",
      departments: departments || [],
    },
  ];
}
