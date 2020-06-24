import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const EditForm = (props) => {
  const classes = useStyles();

  return (
    <div>
      <header>
        <Typography gutterBottom variant="h5" component="h1">
          {props.title}
        </Typography>
      </header>
      <section className={classes.root}>{props.children}</section>
      <section className={classes.root}>
        <Button
          data-testid="edit-confirm"
          variant="contained"
          color="primary"
          onClick={props.onConfirm}
        >
          Confirmar
        </Button>

        <Button
          data-testid="edit-cancel"
          variant="contained"
          color="secondary"
          onClick={props.onCancel}
        >
          Cancelar
        </Button>
      </section>
    </div>
  );
};

export default EditForm;
