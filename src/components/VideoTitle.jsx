const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] absolute bg-gradient-to-r from-black text-white ">
      <h1 className="my-4 font-bold mx-14 text-5xl">{title}</h1>
      <p className="my-4 w-2/6 mx-14">{overview}</p>
      <div className="mx-14">
        <button className="bg-white text-black w-28 h-12 rounded-lg cursor-pointer hover:bg-opacity-80">Play Now</button>
        <button className="bg-gray-500 text-white w-28 h-12 rounded-lg cursor-pointer hover:bg-opacity-80 mx-4">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
