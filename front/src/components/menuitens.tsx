import {
  Avatar,
  Container,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { headerStyle, studentInfoStyle } from "../styles/barStyle";
import clsx from "clsx";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";

export function UserHeader({ iconFunction }: { iconFunction: () => void }) {
  const classes = headerStyle();

  return (
    <Container className={classes.root}>
      <Avatar aria-label="recipe" className={classes.avatar}>
        S
      </Avatar>
      <Container className={classes.textContainer}>
        <Typography variant="subtitle1">Sinezio Morais</Typography>
        <Typography variant="caption">UFRB</Typography>
      </Container>
      <IconButton onClick={iconFunction}>
        <ChevronLeftIcon />
      </IconButton>
    </Container>
  );
}

export function ViewingAs({ isVisible }: { isVisible?: Boolean }) {
  const classes = studentInfoStyle();

  return (
    <Container className={clsx(classes.root, isVisible && classes.viewAs)}>
      <Container className={classes.info}>
        <Typography variant="caption">Visualizando como</Typography>
        <Container className={classes.textContainer}>
          <Typography variant="subtitle2">Engenharia de Computação</Typography>
          <Container className={classes.status} disableGutters>
            <Typography className={classes.register} variant="caption">
              2018103271
            </Typography>

            <Typography className={classes.active} variant="caption">
              Ativo
            </Typography>
          </Container>
        </Container>
      </Container>
      <Container disableGutters>
        <ChevronRightIcon />
      </Container>
    </Container>
  );
}

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Matérias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Atividades" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
