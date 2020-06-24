import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "Components/Loader";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Theme";
import { ApolloProvider } from "@apollo/react-hooks";
import pokemonClient from "./Graphql";

const Index = lazy(() => import("./Containers/List"));
const Detail = lazy(() => import("./Containers/Detail"));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ApolloProvider client={pokemonClient}>
        <CssBaseline />
        <Router basename="/pokedex-gql">
          <Switch>
            <Suspense fallback={<Loader />}>
              <Route exact path="/" component={Index} />
              <Route exact path="/:name" component={Detail} />
            </Suspense>
          </Switch>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
