import { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

// Extend the Window interface
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google: any;
  }
}

function Translate() {
  useEffect(() => {
    // Define the googleTranslateElementInit function
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Assign the function to the window object
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Create and append the Google Translate script
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
  }, []);

  return (
    <div id="google_translate_element">
      <span className="icon px-2 py-3  border-[1px] border-[#231C31] sm:px-5 dark:bg-[#231C31]  dark:text-yellow-400 rounded-xl">
        <FaGlobe className="dark:text-yellow-300 text-[#1b1324]" size={18} />
      </span>
    </div>
  );
}

export default Translate;
