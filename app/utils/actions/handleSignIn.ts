export const handleSignIn = async () => {
  try {
    console.log("zaczynam");
    const data = {
      email: "asdasd",
      password: "asdasd",
    };
    const { email, password } = data;
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const userInfo = await res.json();
    await console.log(userInfo);
    return res;
  } catch (error) {
    console.log(error);
  }
};
