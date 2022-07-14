import './App.css';
import NavigationBar from './components/NavigationBar';
import "./Style/landingpage.css";
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"

function App() {
  return (
    <div>
      {/*Intro section*/}
      <div className="myBG">
      <NavigationBar/>
      <Intro/>
      </div>
      {/*End Of Intro*/}
      <div className="trending">
        <Trending/>
      </div>
      <div>
        <Superhero/>
      </div>
    </div>
  )
}

export default App;
