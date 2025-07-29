import "./App.css";
import Header from "./myComponents/Header";
import Toolbar from "./myComponents/Toolbar";
import Title from "./myComponents/Title";
import Lastest from "./myComponents/Latest";
import Elements from "./myComponents/Elements";
import ColorPalette from "./myComponents/ColorPalette";
import TechUsed from "./myComponents/TechUsed";

function App() {
  return (
    <div className="App">
      <Header />
      <Toolbar />
      <Title />
      {/* <Lastest /> */}
      <Elements />
      <ColorPalette />
      <TechUsed />
    </div>
  );
}

export default App;
