import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b3039.cloudfunctions.net/api", // API (cloud function) URL
});

export default instance;

// Localhost api endpoint -> http://localhost:5001/clone-b3039/us-central1/api
