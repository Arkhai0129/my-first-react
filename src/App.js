import "./App.css";
import { Navbar } from "./component/Navbar";
import { CoverPhoto } from "./component/CoverPhoto";
import { TextWithButton } from "./component/TextWithButton";
import { Products } from "./component/Products";
import { item1 } from "./component/assets/products/item1.jpeg";
import { item2 } from "./component/assets/products/item2.jpeg";
import { item3 } from "./component/assets/products/item3.jpeg";
import { item4 } from "./component/assets/products/item4.jpeg";
import { item5 } from "./component/assets/products/item5.jpeg";
import { item6 } from "./component/assets/products/item6.jpeg";

function App() {
  const data = [
    {
      id: "1",
      name: "Nike Blazer Mid 77",
      description: "Classic sneakers with a vintage look",
    },
    {
      id: "2",
      name: "Nike Air Max 270",
      description: "Air Max series with a comfortable and stylish design.",
    },
  ];
  return (
    <>
      <div id="Navbar-container">
        <Navbar />
        <CoverPhoto />
        <TextWithButton />
      </div>
      {data.map((obj) => (
        <div className="product">
          <Products
            imageUrl={img1}
            header="Nike Blazer Mid '77"
            description="Nike shoes"
          />
        </div>
      ))}
    </>
  );
}
export default App;
