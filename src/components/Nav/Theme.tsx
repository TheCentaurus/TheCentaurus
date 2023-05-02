import { useContext } from "react";
import { BsSun } from "react-icons/bs";
import MyThemeContext from "../../theme/themeContext";

const Theme = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const toggleThemeHandler = () => {
    themeCtx.toggleThemeHandler();
  };

  return (
    <div>
      <button
        type="button"
        className="px-2 py-3 mr-2 border-[1px] border-[#231C31] sm:px-5 dark:bg-[#231C31]  dark:text-yellow-400 rounded-xl"
        onClick={toggleThemeHandler}
      >
        <BsSun />
      </button>
    </div>
  );
};

export default Theme;
