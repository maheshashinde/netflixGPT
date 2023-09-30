import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { changeShowGpt } from "../redux/configSlice";
import { remove, save } from "../redux/userSlice";
import { LOGO } from "../utilities/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store?.config?.showGpt);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          save({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(remove());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleGPTHome = () => {
    console.log("cliecked");
    dispatch(changeShowGpt());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between p-2">
          <button
            className="bg-red-500 text-black w-28 h-12 rounded-lg mr-2 cursor-pointer hover:bg-opacity-80 md:block hidden"
            onClick={toggleGPTHome}
          >
            {showGpt ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-14 h-14 rounded-lg"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="ml-4 font-bold text-white "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
