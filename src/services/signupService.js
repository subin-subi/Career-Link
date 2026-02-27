export const registerUser = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};