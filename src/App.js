import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Search from "./components/Search";
import Explores from "./components/Explores";
import Flexible from "./components/Flexible";
import Live from "./components/Live";

const App = () => {
  const title = "temp";
  const url = "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F4.jpg&w=256&q=75";
  return (
    <div className="App">
      <div className="Heading--page">
        <Navbar />
        <Search />
        <Headline />
      </div>
      <div className="Explore--page">
        <Explores />
      </div>
      <div className="Flexible--page">
        <Flexible />
      </div>
      <div className="Live--page">
        <Live />
        {/* <LiveItem title={title} url={url}/> */}
      </div>
    </div>
  );
};

export default App;
