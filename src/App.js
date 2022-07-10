import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <MainPage />
      <ToastContainer />
    </>
  );
}

export default App;
