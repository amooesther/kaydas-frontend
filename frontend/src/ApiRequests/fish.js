export const fetchFish = async () => {
    try {
      const response = await fetch("https://kaydas-backend.onrender.com/fish");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching fish:", error);
      return { error: error.message };
    }
  };
  