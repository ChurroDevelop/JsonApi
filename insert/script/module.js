export const post = async (idPost) => {
  let request = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
  let response = await request.json();
  return response;
}