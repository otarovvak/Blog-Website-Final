export const logInQuery = async (username: string, password: string) => {
  const res = await fetch("http://localhost:8000/user/signin", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  return await res.json();
};
