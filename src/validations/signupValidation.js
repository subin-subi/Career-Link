export const validateSignup = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!form.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Invalid email format";
  }

  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!form.agree) {
    errors.agree = "You must accept terms";
  }

  return errors;
};