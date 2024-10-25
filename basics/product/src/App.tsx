
import ShoeComponentWrapper from "./components/exercise-one/shoeComponentWrapper";
import ShoeImageComponent from "./components/exercise-one/shoeImageComponent";
import ShoeDetailComponent from "./components/exercise-one/shoeDetailComponent";
import "./App.css";

function App() {
  const shoeName = "Louboutins"
  const shoePrice = 500
  const shoeColor = "black"
  const ImageUrl ="./src/assets/images/lou.png"

  return (
    <>
      <ShoeComponentWrapper>
        <ShoeImageComponent url={ImageUrl} />
        <ShoeDetailComponent shoeName={shoeName} shoePrice={shoePrice} shoeColor={shoeColor} />
      </ShoeComponentWrapper>
    </>
  );
}

export default App;
