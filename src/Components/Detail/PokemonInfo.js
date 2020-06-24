import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 400,
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
    float: "right",
  },
}));

const PokemonInfo = ({ pokemon }) => {
  const classes = useStyles();
  return (
    <Fragment>
      {pokemon.image ? (
        <CardMedia
          component="img"
          className={classes.media}
          image={pokemon.image}
          title={pokemon.name}
        />
      ) : null}
      <CardContent>
        <Box>
          <Chip
            variant="outlined"
            color="secondary"
            label={pokemon.number}
            className={classes.number}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="textPrimary"
          >
            <b>{pokemon.name}</b>
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
          {pokemon.resistant ? (
            <Box className={classes.badge}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Resistências:</b>
              </Typography>
              {pokemon.resistant.map((type, index) => (
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
          {pokemon.weaknesses ? (
            <Box className={classes.badge}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Fraquezas:</b>
              </Typography>
              {pokemon.weaknesses.map((type, index) => (
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
          {pokemon.height ? (
            <Box className={classes.badge}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Faixa de altura:</b>
              </Typography>
              <Chip
                className="label"
                size="small"
                color="secondary"
                label={`${pokemon.height.minimum} - ${pokemon.height.maximum}`}
              />
            </Box>
          ) : null}
          {pokemon.weight ? (
            <Box className={classes.badge}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Faixa de peso:</b>
              </Typography>
              <Chip
                className="label"
                size="small"
                color="secondary"
                label={`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}
              />
            </Box>
          ) : null}
          {pokemon.maxHP ? (
            <Box className={classes.badge}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Max HP:</b>
              </Typography>
              <Chip
                className="label"
                size="small"
                color="secondary"
                label={pokemon.maxHP}
              />
            </Box>
          ) : null}
          {pokemon.maxCP ? (
            <Box className={classes.badge}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Max CP:</b>
              </Typography>
              <Chip
                className="label"
                size="small"
                color="secondary"
                label={pokemon.maxCP}
              />
            </Box>
          ) : null}
        </Box>
      </CardContent>
    </Fragment>
  );
};

export default PokemonInfo;
