
import { Route,Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
<div className="App">

<Navbar />
<Routes>
<Route path="/" element={<LandingPage/>}></Route>
</Routes>

</div>
  );
}


export default App;
