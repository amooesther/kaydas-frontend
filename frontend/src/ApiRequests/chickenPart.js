export const fetchChickenPart = async () => {
    try {
      const response = await fetch("http://localhost:3002/chickenPart");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching chickenPart:", error);
      return { error: error.message };
    }
  };
  