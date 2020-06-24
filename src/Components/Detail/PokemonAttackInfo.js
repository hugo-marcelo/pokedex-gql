import React, { Fragment } from "react";
import {
  CardContent,
  Typography,
  Box,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const PokemonAttackInfo = ({ fast = [], special = [] }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <CardContent>
        <Typography
          variant="h6"
          color="textSecondary"
          className={classes.center}
          component="p"
        >
          <b>Ataques</b>
        </Typography>
        <Box mt={2}>
          <Grid container spacing={3}>
            {fast && fast.length > 0 && (
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.center}
                  component="p"
                >
                  Rápido
                </Typography>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell align="right">Dano</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fast.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell align="right">{row.damage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            )}
            {special && special.length > 0 && (
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.center}
                  component="p"
                >
                  Especial
                </Typography>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell align="right">Dano</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {special.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell align="right">{row.damage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            )}
          </Grid>
        </Box>
      </CardContent>
    </Fragment>
  );
};

export default PokemonAttackInfo;
