import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Box } from "@material-ui/core";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
    width: "100%",
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <Box key={0} height={30} py={5} className={classes.center}>
      <CircularProgress />
    </Box>
  );
};
export default Loader;
