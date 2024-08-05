import nikeLogo from "./assets/nikeLogo.jpg";
import search_icon from "./assets/search_icon.png";

export const Navbar = () => {
  const navLinks = ["New & Featured", "Men", "Women", "Kids", "Jordan", "Sale"];
  return (
    <div className="Nav">
      <div className="nav-left">
        <img src={nikeLogo} alt="" />
      </div>
      <div className="nav-center">
        {navLinks.map((links) => (
          <a hreg="#">{links}</a>
        ))}
      </div>
      <div className="nav-right">
        <button>
          <img src={search_icon} className="search_icon" alt="" />
        </button>
        <input type="text" className="search-box" placeholder="Search"></input>
      </div>
    </div>
  );
};
