import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <div className="bg-[#131520]/90 min-h-screen">
        <div className=" max-w-[1840px] mx-auto">
          <Header />
          <Slider />
          <ProductionHouse />
        </div>
      </div>
    </>
  );
}

export default App;
