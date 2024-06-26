export const comentarios = async () => {
  let request = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  let response = await request.json();
  return response;
}