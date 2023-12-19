import CircularProgress from "@mui/material/CircularProgress";

import classes from "../style/LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={classes.loadingSpinner}>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
