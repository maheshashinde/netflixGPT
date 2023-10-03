const WebHeader = () => {
  return (
    <div className="h-20 w-full flex justify-center">
      <img
        className="h-2/3 my-auto"
        src="https://vdigtech.com/wp-content/uploads/2023/09/COM-2.png"
        alt="logo"
      />
      <ul className="flex mx-10">
        <li className="mx-5 ml-10 my-auto transition-colors duration-400 hover:text-header_hover">Home</li>
        <li className="mx-5 my-auto transition-colors duration-400 hover:text-header_hover">About Us</li>
        <li className="mx-5 my-auto transition-colors duration-400 hover:text-header_hover">
          Services 
        </li>
        <li className="mx-5 my-auto transition-colors duration-400 hover:text-header_hover">
          Products 
        </li>
        <li className="mx-5 my-auto transition-colors duration-400 hover:text-header_hover">
          Contact us 
        </li>
      </ul>
      <div className="my-auto transition-colors duration-400 hover:text-header_hover">+91 8249927042</div>
      <button className="my-auto mx-5 rounded-3xl transition-colors duration-400 hover:text-header_hover w-36 h-10 border border-purple-300">JOIN NOW</button>
    </div>
  );
};

export default WebHeader;
