export const fetchTopDiscounts = async () => {
  try {
    const response = await fetch("http://localhost:3002/discount");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "this is the error");
    return { error: error.message }; 
  }
};
