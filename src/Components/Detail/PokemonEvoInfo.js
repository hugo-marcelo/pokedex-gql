import React, { Fragment } from "react";
import {
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
    width: "100%",
  },
  media: {
    height: 150,
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      height: 250,
    },
  },
}));

const PokemonEvoInfo = ({ evolutions = null, requirement }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>
      <CardContent>
        {evolutions ? (
          <Fragment>
            {requirement && (
              <Fragment>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.center}
                  component="p"
                >
                  <b>Requerimentos de Evolução</b>
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.center}
                  component="p"
                >
                  {requirement.name} x {requirement.amount}
                </Typography>
              </Fragment>
            )}
            <Box my={2} />
            <Typography
              variant="h6"
              color="textSecondary"
              className={classes.center}
              component="p"
            >
              <b>Evoluções</b>
            </Typography>
            <Box mt={2}>
              <Grid container spacing={3}>
                {evolutions.map((pokemon, index) => (
                  <Fragment key={index}>
                    <Grid item xs={6} sm={6}>
                      <Card className={classes.center} elevation={3}>
                        <CardActionArea
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
                          <Box my={2}>
                            {pokemon.number ? (
                              <Typography variant="body2">
                                <b>Número:</b> {pokemon.number}
                              </Typography>
                            ) : null}
                            {pokemon.name ? (
                              <Typography variant="body2">
                                <b>Nome:</b> {pokemon.name}
                              </Typography>
                            ) : null}
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Box>
          </Fragment>
        ) : null}
      </CardContent>
    </Fragment>
  );
};

export default PokemonEvoInfo;
