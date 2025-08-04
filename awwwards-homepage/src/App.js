import "./App.css";
import Scrollheader from "./myComponents/Scrollheader";
import Header from "./myComponents/Header";
import Toolbar from "./myComponents/Toolbar";
import Title from "./myComponents/Title";
import Lastest from "./myComponents/Latest";
import Elements from "./myComponents/Elements";
import ColorPalette from "./myComponents/ColorPalette";
import TechUsed from "./myComponents/TechUsed";
import Description from "./myComponents/Description";
import Inside from "./myComponents/Inside";
import Collections from "./myComponents/Collections";
import Footer from "./myComponents/Footer";

function App() {
  return (
    <div className="App">
      <Scrollheader />
      <Header />
      <Toolbar />
      <Title />
      {/* <Lastest /> */}
      <Elements />
      <ColorPalette />
      <TechUsed />
      <Description />
      <Inside />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
