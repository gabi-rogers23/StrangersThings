export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt";

function getHeaders() {
  let headers = {
    "Content-Type": "application/json",
  };
  const currentToken = localStorage.getItem("auth_token");
  if (currentToken != null) {
    headers["Authorization"] = "Bearer " + currentToken;
  }
  console.log("Current Headers: " + JSON.stringify(headers));
  return headers;
}

export async function fetchAllPosts() {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      headers: getHeaders(),
    });
    const data = await res.json();

    return data.data.posts;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addPost(
  newTitle,
  newDescription,
  newPrice,
  newLocation,
  newWillDeliver
) {
  const sendData = {
    post: {
      title: newTitle,
      description: newDescription,
      price: newPrice,
      location: newLocation,
      willDeliver: newWillDeliver,
    },
  };

  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    console.log(data);
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

export async function logIn(userUsername, userPassword) {
  const sendData = {
    user: { username: userUsername, password: userPassword },
  };
  console.log("LogIn Data" + sendData);
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    localStorage.setItem("auth_token", data.data.token);

    console.log("Login Data" + data.data);
    console.log(getHeaders());
  } catch (error) {
    throw error;
  }
}

export async function getProfile() {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      headers: getHeaders(),
      method: "GET",
    });
    const data = await res.json();
    console.log(data.data.posts);
    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(POST_ID) {
  try {
    const res = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    const data = await res.json();
    console.log(data.success);
  } catch (error) {
    throw error;
  }
}

export async function sendMessage(POST_ID, content) {
  try {
    const res = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    });
    const data = await res.json();
    console.log(data.success);
  } catch (error) {
    throw error;
  }
}

export async function editPost(
  POST_ID,
  newTitle,
  newDescription,
  newPrice,
  newLocation,
  newWillDeliver
) {
  const sendData = {
    post: {
      title: newTitle,
      description: newDescription,
      price: newPrice,
      location: newLocation,
      willDeliver: newWillDeliver,
    },
  };

  try {
    const res = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    console.log(data);
    return data.data.post;
  } catch (error) {
    console.log(error);
    return {};
  }
}
