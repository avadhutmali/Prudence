import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Participate from "./components/Participate";
import Prudence from "./components/Prudence";
import Register from "./components/Register";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-zinc-950 overflow-x-hidden relative">
      <Navbar />
      <Prudence />
      <Events />
      <Register />
      <Participate />
      <Gallery />
    </div>
  );
}

export default App;
