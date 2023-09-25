import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackgroud";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const filterMovie = movies[0];
  const { original_title, overview, id } = filterMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
