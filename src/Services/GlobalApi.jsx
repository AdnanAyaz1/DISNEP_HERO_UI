const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjkyZmNmMDFhNGNmMjI0ZjlhMGJlZmI1NWIwNWViNSIsInN1YiI6IjY1NGUwMjUyNjdiNjEzMDExZjQyODRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTbLhdhOwmYRNEfFYdjEcJc-IlWQkBwZjiaBvJzCvyo'
    }
  };

export const getMoviesData = async () => {
  const dataJson = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  const data = await dataJson.json();
  return data;
};

export const getMoviesByGenre = async (genre)=>{
  const dataJson = await fetch(`https://api.themoviedb.org/3/movie/${genre}/lists?page=1`,options)
  const data = await dataJson.json()
  return data
}