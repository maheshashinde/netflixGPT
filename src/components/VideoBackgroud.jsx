import { useSelector } from "react-redux";
import useMovieClips from "../hooks/useMovieClips";


const VideoBackground = ({ id }) => {
  const trailer=useSelector(store=>store.movies?.trailer);
  useMovieClips(id);
  return (
    <div className="w-screen md:pt-0 pt-[30%]">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
