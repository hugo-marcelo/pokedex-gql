import React, { useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Chip,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router";

import EditForm from "../EditForm";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    objectFit: "contain",
  },
  badge: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    "& > .label": {
      margin: theme.spacing(0.5),
    },
  },
  number: {
    padding: theme.spacing(0),
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    top: 10,
  },
}));

const PokemonListItem = ({ pokemon }) => {
  const client = useApolloClient();
  const classes = useStyles();
  const history = useHistory();

  const [isEdit, setEdit] = useState(false);
  const [error, setError] = useState(false);
  const [newName, setNewName] = useState("");

  const CHANGE_POKEMON = gql`
    fragment myPokemon on pokemons {
      id
      name
    }
  `;

  const startEdit = () => {
    setEdit(true);
    setError(false);
    setNewName("");
  };

  const modalConfirmHandler = () => {
    if (newName.length > 0) {
      setEdit(false);
      client.readFragment({
        id: "Pokemon:" + pokemon.id,
        fragment: CHANGE_POKEMON,
      });

      client.writeFragment({
        id: "Pokemon:" + pokemon.id,
        fragment: CHANGE_POKEMON,
        data: {
          name: newName,
          __typename: "Pokemon",
          id: pokemon.id,
        },
      });
    } else {
      setError(true);
    }
  };

  const modalCancelhandler = () => {
    setEdit(false);
    setError(false);
  };

  return (
    <Grid item xs={12} sm={3}>
      <Card>
        <CardActionArea
          data-testid="card-button"
          onClick={() => history.push(`/${pokemon.name}`)}
        >
          {pokemon.image ? (
            <CardMedia
              component="img"
              className={classes.media}
              image={pokemon.image}
              title={pokemon.name}
            />
          ) : null}
          <Chip
            label={pokemon.number}
            className={classes.number}
            size="small"
            color="secondary"
            variant="outlined"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pokemon.name}
            </Typography>
            {pokemon.classification ? (
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Classificação:</b> {pokemon.classification}
              </Typography>
            ) : null}
            {pokemon.types ? (
              <Box className={classes.badge}>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Tipos:</b>
                </Typography>
                {pokemon.types.map((type, index) => (
                  <Chip
                    key={index}
                    className="label"
                    size="small"
                    color="secondary"
                    label={type}
                  />
                ))}
              </Box>
            ) : null}
          </CardContent>
        </CardActionArea>
        <CardActions>
          {!isEdit && (
            <Button
              data-testid="edit-button"
              color="secondary"
              onClick={startEdit}
            >
              Editar
            </Button>
          )}

          {isEdit && (
            <EditForm
              title="Editar Pokemon"
              onCancel={modalCancelhandler}
              onConfirm={modalConfirmHandler}
            >
              <form>
                <TextField
                  error={error && newName.length === 0}
                  helperText={
                    error && newName.length === 0 ? "Informe o novo nome." : ""
                  }
                  id="title"
                  label="Novo Nome"
                  variant="filled"
                  color="secondary"
                  placeholder={pokemon.name}
                  onChange={(e) => setNewName(e.target.value)}
                ></TextField>
              </form>
            </EditForm>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};
export default PokemonListItem;
