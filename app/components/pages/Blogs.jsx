import BlogTitles from "../BlogTitles";

export default function Blogs({ blogs = [] }) {
  return (
    <div
      id="blogs"
      className="scroll-mt-[80px] min-h-[calc(100vh-104px)] w-full bg-lightPink text-darkPurple resp-px p-14"
    >
      <h1 className="clash-display font-semibold text-4xl mb-10">Blogs</h1>
      <p className="text-3xl darker-grotesque font-semibold mb-6">
        Dive into insights, stories, and tutorials straight from the minds of
        our community.
      </p>
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogTitles key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
