export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt';



export async function fetchAllPosts() {
    try {
      const res = await fetch(`${ BASE_URL }/posts`);
      const data = await res.json();
  
      return data.data.posts;
    } catch (error) {
      throw error;
    }
  }
  
