import "./css/App.css";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
