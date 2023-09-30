const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video md:pt-[20%] pt-[50%] absolute md:bg-gradient-to-r md:from-black text-white ">
      <h1 className="my-4 font-bold mx-14 text-lg md:text-5xl">{title}</h1>
      <p className="my-4 w-2/6 mx-14 hidden md:block">{overview}</p>
      <div className="mx-14">
        <button className="bg-white text-black md:w-28 md:h-12 w-20 h-10 rounded-lg cursor-pointer hover:bg-opacity-80">Play Now</button>
        <button className="bg-gray-500 hidden md:inline-block text-white w-28 h-12 rounded-lg cursor-pointer hover:bg-opacity-80 mx-4">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
