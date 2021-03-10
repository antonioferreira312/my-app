import { Button, Grid } from "@material-ui/core";
import { useTheme } from "../providers/themeContext";

interface Iprops {
  colorSet: string;
  value: string;
}
const ButtonSetColor = (props: Iprops) => {
  const { setCurrentTheme } = useTheme();

  return (
    <Grid item sm>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => setCurrentTheme(props.colorSet)}
      >
        {props.value}
      </Button>
    </Grid>
  );
};

export default ButtonSetColor;
