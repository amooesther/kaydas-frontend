export const fetchWhole = async () => {
    try {
      const response = await fetch("https://kaydas-backend.onrender.com/whole");
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
  