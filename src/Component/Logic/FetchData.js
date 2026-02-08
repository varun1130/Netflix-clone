const ApiKey = "f9eb7bb7c90d4cfa1a2af5dabbd3a0af";
const URL = "https://api.themoviedb.org/3";
// const pop =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

let data;

export const getMovies = async () => {
  const response = await fetch(`${URL}/movie/popular?api_key=${ApiKey}`);
  const data = await response.json();
  return data.results;
};
export const searchMovies = async (query) => {
  const response = await fetch(
    `${URL}/search/movie?api_key=${ApiKey}&query=${encodeURIComponent(query)}`
  );
   data = await response.json();
  //console.log(data.results);
  // for (let i = 0; i < Object.keys(data.results).length; i++) {
  //   console.log(data);
    
  //   console.log(`for in : ${data.results[i].release_date}`);
  // }
  return data.results;
};
export const IdSearch = async (Id) =>{
  const res = await fetch(`${URL}/movie/${Id}?api_key=${ApiKey}`)
  return res
}
