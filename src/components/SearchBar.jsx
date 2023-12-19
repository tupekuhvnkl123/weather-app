//// Packages
import { Autocomplete, TextField } from "@mui/material";

//// Styles
import classes from "../style/SearchBar.module.scss";

//// Shared
import { citiesList } from "../shared/constants/city_list";

const SearchBar = ({ changeWeather }) => {
  return (
    <form className={classes.searchForm}>
      <Autocomplete
        size="small"
        disablePortal
        className={classes.textField}
        options={citiesList}
        onChange={(event, value) => {
          changeWeather({ city: value || "Jerusalem" });
        }}
        renderInput={(params) => (
          <TextField {...params} label="City" variant="filled" />
        )}
      />
    </form>
  );
};

export default SearchBar;
