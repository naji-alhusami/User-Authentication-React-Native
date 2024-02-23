import axios from "axios";

const API_KEY = "AIzaSyBHq4U4uPTekKDTnGPK22_sdx8Xc36qvVo";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken; // data provided by axios

  return token;
}

export function createUser(email, password) {
  //   const token = await authenticate("signUp", email, password); we can use this with putting async OR the other solution
  //   return token;
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
