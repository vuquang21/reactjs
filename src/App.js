import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Headline from "./components/Headline/Headline";
import Search from "./components/Search/Search";
import Explores from "./components/Explore/Explores";
import Flexible from "./components/Flexible/Flexible";
import Live from "./components/Live/Live";
import Discover from "./components/Discover/Discover";
import Hosting from "./components/Hosting/Hosting";
import Footer from "./components/Footer/Footer";

const App = () => {
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
      </div>
      <div className="Discover--page">
        <Discover />
      </div>
      <div className="Hosting--page">
        <Hosting />
      </div>
      <div className="Footer--page">
        <Footer />
      </div>
    </div>
  );
};

export default App;
