import Home from "./pages/Home";
import SingIn from "./pages/Singin";
import SingUp from "./pages/SingUp";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
  );
}

export default App;