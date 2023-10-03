import { useState } from "react";

const Body3 = () => {
  const [show, setShow] = useState(null);

  const handleToggle = (i) => {
    if (show === i) {
      setShow(null);
      return;
    }
    setShow(i);
  };

  return (
    <div className="flex mx-72">
      <div>
        <h1 className="text-5xl font-bold mt-20 leading-tight">
          Website Designing or
          <br /> Development Services
        </h1>
        <p className="mx-auto mt-6 leading-loose">
          If you’re looking for website designing services, there are several
          options available to you.Here are a few avenues you can explore:
        </p>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-10 border">
            <div
              className="flex justify-between cursor-pointer border pr-10"
              onClick={() => handleToggle(1)}>
              <p className="text-header_hover">Complete website management</p>
              <span>{show === 1 ? "-" : "+"}</span>
            </div>
            <p className="px-5" hidden={show === 1 ? false : true}>
              Complete website management encompasses comprehensive services to
              handle all aspects of a website’s operation and maintenance. It
              includes activities such as website design and development,
              content updates, security monitoring, performance optimization,
              SEO, backups and restoration, domain and hosting management, and
              ongoing support. This holistic approach ensures a well-maintained,
              secure, and high-performing website, allowing businesses to focus
              on their core operations while leaving the technical aspects to
              the experts, and website maintenance costs.
            </p>
          </div>
          <div className="col-span-10 border flex justify-between pr-10">
            <p>Heading</p>
            <span>+</span>
          </div>
          <div className="col-span-10 border flex justify-between pr-10">
            <p>Heading</p>
            <span>+</span>
          </div>
        </div>
      </div>
      <div>
        <img
          className="pt-20 hover:animate-bounce-slow"
          src="https://vdigtech.com/wp-content/uploads/2023/09/cr4.png"
          alt="pic"
        />
      </div>
    </div>
  );
};

export default Body3;
