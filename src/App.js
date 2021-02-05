import "./App.scss";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import MainContainer from "./MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
