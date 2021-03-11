import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function History() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    // <div style={{ paddingLeft:'70%' }}>
    //   <Card className={classes.root}>
    //     <CardContent>
    //       <Typography
    //         className={classes.title}
    //         color="textSecondary"
    //         gutterBottom
    //       >
    //         History
    //         <div>
    //             API URL
    //         </div>
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </div>

    <div className={classes.root}>
      <div>History</div>
    </div>
  );
}
