export const fetchTeamsData = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
      headers: { "X-Auth-Token": import.meta.env.VITE_API_KEY },
    });
    const data = await response.json();
    const { teams } = data;
    return teams;
  } catch (err) {
    console.log(`Error in fetch for teams info ${err}`);
    return [];
  }
};
