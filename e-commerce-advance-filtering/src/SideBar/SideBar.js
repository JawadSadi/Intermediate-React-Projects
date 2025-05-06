import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
import "./Sidebar.css";
export default function SideBar({ handleCategory }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleCategory={handleCategory} />
        <Price handleCategory={handleCategory} />
        <Color handleCategory={handleCategory} />
      </section>
    </>
  );
}
