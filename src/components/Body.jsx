import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Design from "../Websites/Design";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {


  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/web1",
      element: <Design />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
