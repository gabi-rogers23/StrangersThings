export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt";

export async function fetchAllPosts() {
  try {
    const res = await fetch(`${BASE_URL}/posts`);
    const data = await res.json();

    return data.data.posts;
  } catch (error) {
    throw error;
  }
}

export async function registerNewUser(newUserName, newPassword) {
  const sendData = {
    user: { username: newUserName, password: newPassword },
  };
  console.log(sendData);
  console.log(JSON.stringify(sendData));
  try {
    const res = await fetch(`${BASE_URL}/users/register`, {
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    localStorage.setItem("auth_token", data.data.token);
    console.log(data);
  } catch (error) {
    throw error;
  }
}

function getHeaders() {
  let headers = {
    "Content-Type": "application/json"
  }
  const currentToken = localStorage.getItem("auth_token")
  if (currentToken != null) {
    headers.Authorization = currentToken
  }
  console.log("Current Headers: " + headers)
  return headers
}
