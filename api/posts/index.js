import axios from "axios";

function getPostsApi() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

export { getPostsApi };
