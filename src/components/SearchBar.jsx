const SearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center absolute w-full">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" placeholder="What is in your mind?" className="col-span-10 py-4 pl-4 rounded-sm"/>
        <button className="col-span-2 bg-red-500 py-4 rounded-lg ml-4">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
