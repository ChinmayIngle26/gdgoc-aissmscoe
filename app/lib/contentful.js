// Mocking Contentful for local verification

const client = {
  getEntries: async () => ({ items: [] }),
};

export default client;

export async function getEvents() {
  return [];
}

export async function getTeamLeads() {
  return [];
}

export async function getBlogs() {
  return [];
}

export async function getTeamData() {
  return [];
}
