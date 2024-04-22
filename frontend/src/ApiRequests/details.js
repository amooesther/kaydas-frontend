export const fetchDetails = async () => {
    try {
      const response = await fetch("http://localhost:3002/details");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching details:", error);
      return { error: error.message };
    }
  };
  