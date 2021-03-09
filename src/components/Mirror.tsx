import * as React from "react";
import { useStyles } from "../styles/myStyles";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

export interface IAppProps {}

export default function Mirror(props: IAppProps) {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined" color="primary">
      Count: 0
      <AccessTimeIcon />
    </Button>
  );
}
