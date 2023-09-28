import { BACKGROUND_URL } from "../utilities/constants";
import SearchBar from "./SearchBar";

const GptPage = () => {
  return (
    <div>
      <img className="absolute -z-10" src={BACKGROUND_URL} alt="netflix-bg" />
      <SearchBar/>
    </div>
  );
};

export default GptPage;
