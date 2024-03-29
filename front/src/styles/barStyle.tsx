import { makeStyles } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";

export const headerStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
    ...theme.mixins.toolbar,
  },

  textContainer: {
    paddingRight: 5,
    paddingLeft: 15,
    maxWidth: 180,
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  avatar: {
    backgroundColor: red[500],
    marginLeft: 5,
  },
}));

export const studentInfoStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    color: "#444",
    alignItems: "center",
  },
  info: {
    margin: 0,
    display: "flex",
    padding: "5px 5px",
    alignItems: "center",
    flexDirection: "column",
  },
  status: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  textContainer: {
    paddingRight: 5,
    paddingLeft: 15,
    userSelect: "none",
  },

  active: {
    color: green[500],
    display: "block",
  },

  register: {
    display: "block",
  },

  avatar: {
    backgroundColor: red[500],
  },

  viewAs: {
    display: "none",
  },
}));
