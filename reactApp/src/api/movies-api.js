export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2b2e13452dd34f686625f4fbe3a966f8&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };