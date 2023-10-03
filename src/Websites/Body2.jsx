import Body2Cart from "./Body2Cart";

const Body2 = () => {
  return (
    <>
    <div className="mt-20 mx-72">
      <div className="font-bold text-4xl text-center">Our Services</div>
      <div className="w-5/6 h-20 text-center mx-auto mt-8 text-3xl">
        Comprehensive Website Services to Ignite Your Online Success. Empower
        Your Business with Powerful Online Services from our Website.
      </div>
    </div>
    <div className="flex bg-white justify-center my-6 mt-5">
      <Body2Cart />
      <Body2Cart />
      <Body2Cart />
      </div>
      <div className="flex bg-white justify-center my-6">
      <Body2Cart />
      <Body2Cart />
      <Body2Cart />
      </div>
      <div className="h-40 flex justify-center align-middle bg-b1">
            <div className="px-24 my-auto">Creative People</div>
            <div className="px-24 my-auto">Good Reviews</div>
            <div className="px-24 my-auto">Awesome Design</div>
            <div className="px-24 my-auto">Fast Delivery</div>
      </div>
    </>
  );
};

export default Body2;
