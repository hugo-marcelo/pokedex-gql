import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import POKEMON_QUERY from "Graphql/Pokemon";
import { Box, Typography, Container, Card, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "Components/Detail/Header";
import Loader from "Components/Loader";
import PokemonInfo from "Components/Detail/PokemonInfo";
import PokemonEvoInfo from "Components/Detail/PokemonEvoInfo";
import PokemonAttackInfo from "Components/Detail/PokemonAttackInfo";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
    width: "100%",
  },
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
  mediaEvo: {
    height: 150,
    objectFit: "contain",
  },
}));

const Detail = () => {
  const classes = useStyles();
  const { name } = useParams();
  const { loading, error, data: { pokemon = null } = {} } = useQuery(
    POKEMON_QUERY,
    {
      variables: { name },
    }
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Box key={0} height={30} py={5} className={classes.center}>
        <Typography>{error?.message}</Typography>
      </Box>
    );
  }
  return (
    <Fragment>
      <Header name={name} />
      <Box my={2}>
        <Container>
          {pokemon && (
            <Card>
              <PokemonInfo pokemon={pokemon} />
              <Divider />
              <PokemonAttackInfo
                fast={pokemon.attacks.fast}
                special={pokemon.attacks.special}
              />
              <Divider />
              <PokemonEvoInfo
                evolutions={pokemon.evolutions}
                requirement={pokemon.evolutionRequirements}
              />
            </Card>
          )}
        </Container>
      </Box>
    </Fragment>
  );
};

export default Detail;
