import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const styles = createStyles({
  root: {
    padding: "50px 100px",
    zIndex: 999,
    position: "absolute",
  },
  card: {
    display: "flex",
    height: "calc(100vh - 100px)",
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px",
  },
  content: {
    marginTop: 0,
  },
  background: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    background: "#7159C1",
  },
  rightContainer: {
    background:
      "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
    flex: 1,
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    background: "#9de1fe",
    padding: 20,
  },
  information: {
    color: "#444",
  },
});
interface App_props {
  classes: ClassNameMap;
  // {
  //   root: string;
  //   card: string;
  //   rightBorder: string;
  //   content: string;
  //   background: string;
  //   rightContainer: string;
  //   heightAdjust: string;
  //   paper: string;
  //   information: string;
  //   avatar: string;
  // };
}

const App = ({ classes }: App_props) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const list = [
  { id: 1, name: "Diego", text: "Lorem ipsum", image: <ImageIcon /> },
  { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> },
];

const LeftContainer = ({ classes }: App_props) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          H
        </Avatar>
      }
    />
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subtitle2">
        Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
    </Paper>
    <List>
      {list.map((item) => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

const RightContainer = ({ classes }: App_props) => (
  <Grid className={classes.heightAdjust} item xs={9}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Diego"
    />
    <CardContent
      className={[classes.rightContainer, classes.content].join(", ")}
    />
  </Grid>
);

export default withStyles(styles)(App);
