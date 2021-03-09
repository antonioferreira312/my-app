import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import ButtonSetColor from "../components/ButtonSetColor";

export default function Home() {
  return (
    <Grid
      direction="column"
      justify="space-between"
      alignItems="center"
      alignContent="center"
      container
      spacing={1}
    >
      <ButtonSetColor colorSet="dark" value="Night" />
      <ButtonSetColor colorSet="light" value="Day" />
    </Grid>
  );
}
