export const fetchChicken = async () => {
    try {
      const response = await fetch("http://localhost:3002/chicken");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching chicken:", error);
      return { error: error.message };
    }
  };
  