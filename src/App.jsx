import React, { useState } from "react";
import { ToastContainer, Slide, Zoom, Flip, Bounce } from "react-toastify";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import ComingSoonDark from "./views/ComingSoonDark";
import Passengers from "./views/Passengers";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeToDarkTheme = () => {
    console.log("Changes to Dark Theme");
    setIsLightTheme(false);
  };
  const changeToLightTheme = () => {
    console.log("Changes to Light Theme");
    setIsLightTheme(true);
  };
  return (
    <>
      {isLightTheme ? (
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="toast-light-theme"
            transition={Slide}
          />
          <div className="app light-theme">
            <Switch>
              <Routes>
                <Route path="/passengers" element={<ComingSoonDark />} />
              </Routes>
            </Switch>
          </div>
        </>
      ) : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="toast-dark-theme"
            transition={Slide}
          />
          <div className="app dark-theme">
            <Switch>
              <Routes>
                <Route path="/passengers" element={<ComingSoonDark />} />
              </Routes>
            </Switch>
          </div>
        </>
      )}
    </>
  );
};

export default App;
