// services/authService.js

export const loginUser = async (form) => {
  console.log(import.meta.env.VITE_ADMIN_EMAIL , form.email);
console.log(import.meta.env.VITE_ADMIN_PASSWORD , form.password);

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  //  console.log("hhh",form)
  // simple env-based login
  if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
    return {
      email: form.email,
      token: "demo-token",
    };
  }

  throw new Error("Invalid email or password");
};


