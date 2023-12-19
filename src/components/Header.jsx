//// Components
import SearchBar from "./SearchBar";
import Clock from "./Clock";

//// Styles
import classes from "../style/Header.module.scss";

const Header = ({ changeWeather }) => {
  return (
    <header className={classes.header}>
      <SearchBar changeWeather={changeWeather} />
      <Clock />
    </header>
  );
};

export default Header;
