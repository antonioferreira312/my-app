import { Button, Container, Grid } from "@material-ui/core";
import { useStyles } from "../styles/myStyles";

export default function Home() {
  const myStyles = useStyles();
  return (
    <Grid
      direction="column"
      justify="space-between"
      alignItems="center"
      alignContent="center"
      container
      spacing={1}
    >
      <Grid item lg>
        <span>
          <b>Count: </b>0
        </span>
      </Grid>

      <Grid item sm>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={myStyles.button}
        >
          increment
        </Button>
      </Grid>
    </Grid>
  );
}
