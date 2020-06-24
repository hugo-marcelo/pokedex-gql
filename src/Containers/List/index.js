import React, { useState, Fragment, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import POKEMONS_QUERY from "Graphql/Pokemons";
import PokemonListItem from "Components/List/PokemonListItem";
import Header from "Components/List/Header";
import InfiniteScroll from "Components/List/InfiniteScroll";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "Components/Loader";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
    width: "100%",
  },
});

const Index = () => {
  const classes = useStyles();
  const [keywords, setKeywords] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [variables, setVariables] = useState({ first: 16 });

  const { loading, error, data: { pokemons = [] } = {}, fetchMore } = useQuery(
    POKEMONS_QUERY,
    {
      variables: { first: 16 },
    }
  );

  const loadMore = async () => {
    try {
      await fetchMore({
        variables: { first: variables.first + 16 },
        updateQuery: (prev, { fetchMoreResult, variables }) => {
          setVariables(variables);
          setHasMore(fetchMoreResult.pokemons.length % 16 === 0 ? true : false);
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        },
      });
    } catch {}
  };

  const filteredData = (data) =>
    data.filter(({ name, classification, types }) => {
      return (
        name.toLowerCase().includes(keywords.toLowerCase()) ||
        classification.toLowerCase().includes(keywords.toLowerCase()) ||
        types.join(" ").toLowerCase().includes(keywords.toLowerCase())
      );
    });

  useEffect(() => {
    keywords.length || pokemons.length % 16 !== 0
      ? setHasMore(false)
      : setHasMore(true);
  }, [keywords, pokemons.length]);

  return (
    <Fragment>
      <Header
        onChange={({ target: { value } }) => setKeywords(value)}
        onDelete={() => setKeywords("")}
        keywords={keywords}
      />
      <Box my={2}>
        <Container>
          <InfiniteScroll
            refs="pokemonList"
            loadMore={() => loadMore()}
            hasMore={hasMore}
            isLoading={loading}
            loader={<Loader key={0} />}
            error={
              error ? (
                <Box key={-1} height={30} py={5} className={classes.center}>
                  <Typography>{error?.message}</Typography>
                </Box>
              ) : null
            }
          >
            <Grid container spacing={3}>
              {filteredData(pokemons).length > 0
                ? filteredData(pokemons).map((pokemon, index) => (
                    <Fragment key={index}>
                      <PokemonListItem pokemon={pokemon} />
                    </Fragment>
                  ))
                : !loading && (
                    <Typography variant="h6" className={classes.center}>
                      Nenhum pokemon encontrado
                    </Typography>
                  )}
            </Grid>
          </InfiniteScroll>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Index;
