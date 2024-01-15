import { productionHouse } from "../constants";
const ProductionHouse = () => {
  return (
    <div className="lg:px-16  px-4 grid lg:grid-cols-5 gap-6 md:grid-cols-3 grid-cols-2 my-8">
      {productionHouse.map((mov) => {
        return (
          <div
            key={mov.img}
            className="relative border-2 rounded-md hover:scale-110 hover:shadow-xl hover:shadow-gray-400 duration-200 transition-all ease-in-out hover:cursor-pointer       "
          >
            <img src={mov.img} alt="" />
            <video
              src={mov.video}
              loop
              autoPlay
              playsInline
              muted
              className="absolute inset-0 rounded-md opacity-0 hover:opacity-70"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductionHouse;

