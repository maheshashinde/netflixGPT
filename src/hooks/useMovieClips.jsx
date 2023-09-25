import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";
import { API_OPTIONS } from "../utilities/constants";

const useMovieClips = (id) => {
  const dispatch = useDispatch();
  const getMovieClips = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieClips();
  }, []);
};

export default useMovieClips;
