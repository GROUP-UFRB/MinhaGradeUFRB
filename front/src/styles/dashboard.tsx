import { makeStyles } from "@material-ui/core";

const doubleRowHeight = 275;

export const useGrapsStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  fixedHeight: {
    height: doubleRowHeight,
    marginBottom: theme.spacing(3),
  },

  doubleRowHeight15: {
    height: doubleRowHeight * 2 * 0.157,
    marginBottom: theme.spacing(3),
  },

  doubleRowHeight85: {
    height: doubleRowHeight * 2 * 0.843,
    userSelect: "none",
  },

  doubleRowHeight: {
    height: doubleRowHeight * 2 + theme.spacing(3),
    userSelect: "none",
  },
  infoCardsHeight: {
    height: doubleRowHeight / 2.5,
  },
  titlePadding: {
    paddingBottom: 5,
  },
}));

export const useInfoStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: 50,
    height: 50,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
}));
