export const fetchWhole = async () => {
    try {
      const response = await fetch("http://localhost:3002/whole");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching whole:", error);
      return { error: error.message };
    }
  };
  