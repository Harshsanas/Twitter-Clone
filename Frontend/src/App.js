
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import TweetPost from "./Components/TweetPost/TweetPost";
import Widget from "./Components/Widget/Widget";
import styled from "styled-components"


const MAINPAGE = styled.div`
  display: grid;
  grid-template-columns: 25% 40% 35%;
`;
function App() {
  return (
    <div className="App">
      <MAINPAGE>
        <div>
          <SideBar />
        </div>
        <div>
          <TweetPost />
        </div>
        <div>
          <Widget />
        </div>
      </MAINPAGE>
    </div>
  );
}

export default App;
