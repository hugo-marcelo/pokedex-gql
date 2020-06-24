import React from "react";
import Icon from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/feather";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ name = "Pokemon" }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.goBack()}
          >
            <Icon icon={chevronLeft} size={24} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box height={64} />
    </div>
  );
};
export default Header;
