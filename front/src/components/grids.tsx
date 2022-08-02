import clsx from "clsx";
import React, { useState } from "react";
import {
  Avatar,
  Container,
  FormControl,
  Grid,
  GridSize,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { useGrapsStyle, useInfoStyles } from "../styles/dashboard";
import RadarGraps, { BarGraps, PieGraps } from "./graps";
import {
  AccountTree,
  AccessTime,
  Apps,
  EmojiSymbols,
} from "@material-ui/icons/";

export function SemesterDoubleRow() {
  const classes = useGrapsStyle();
  return (
    <Grid item>
      <Paper className={clsx(classes.paper, classes.doubleRowHeight85)} square>
        {<PieGraps />}
      </Paper>
    </Grid>
  );
}
export function FormGrid() {
  const classes = useGrapsStyle();

  const [semester, setSemester] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSemester(event.target.value as string);
  };

  return (
    <Grid item>
      <Paper className={clsx(classes.paper, classes.doubleRowHeight15)} square>
        <FormControl fullWidth className={classes.titlePadding}>
          <InputLabel id="demo-simple-select-label">Semestre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={semester}
            label="Semestre"
            onChange={handleChange}
          >
            <MenuItem value={10}>2018.1</MenuItem>
            <MenuItem value={20}>2018.2</MenuItem>
            <MenuItem value={30}>2019.1</MenuItem>
            <MenuItem value={30}>2019.2</MenuItem>
            <MenuItem value={30}>2020.1</MenuItem>
            <MenuItem value={30}>2020.2</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Grid>
  );
}
export function SemesterHistoric() {
  const classes = useGrapsStyle();

  return (
    <Grid item>
      <Paper className={clsx(classes.paper, classes.fixedHeight)} square>
        {<BarGraps />}
      </Paper>
    </Grid>
  );
}

export function DoubleRow({
  children,
  xs = 12,
  md = 7,
  lg = 8,
}: {
  children: React.ReactNode;
  xs?: GridSize;
  md?: GridSize;
  lg?: GridSize;
}) {
  const classes = useGrapsStyle();

  return (
    <Grid
      item
      xs={xs}
      md={md}
      lg={lg}
      className={clsx(classes.doubleRowHeight)}
    >
      {children}
    </Grid>
  );
}

export function SubjectList() {
  const classes = useGrapsStyle();

  const data = [
    {
      cod: "CCA283",
      name: "Metodologia da Pesquisa",
    },
    {
      cod: "CET146",
      name: "Cálculo Diferencial e Integral I",
    },
    {
      cod: "CET095",
      name: "Física Geral e Experimental I",
    },
    {
      cod: "CET061",
      name: "Geometria Analítica",
    },
    {
      cod: "CET150",
      name: "Processamento de Dados I",
    },
    {
      cod: "CET066",
      name: "Química Geral",
    },
  ];
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Paper className={clsx(classes.paper, classes.fixedHeight)} square>
        <List dense>
          {data.map((sbj) => (
            <ListItem>
              <ListItemText primary={`${sbj.cod} - ${sbj.name}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
}

export function SubjectRadar() {
  const classes = useGrapsStyle();

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Paper className={clsx(classes.paper, classes.fixedHeight)} square>
        <RadarGraps />
      </Paper>
    </Grid>
  );
}

export function InfoGrids() {
  const classes = useGrapsStyle();
  const infoStyles = useInfoStyles();

  return (
    <>
      <Grid item xs={12} md={3} lg={3}>
        <Paper className={clsx(classes.paper, classes.infoCardsHeight)} square>
          <Container className={clsx(infoStyles.row, infoStyles.card)}>
            <Container>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Score
              </Typography>
              <Typography component="h1" variant="h5" color="inherit" noWrap>
                7.8
              </Typography>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Media do curso: 7.5
              </Typography>
            </Container>
            <Avatar aria-label="recipe" className={infoStyles.avatar}>
              <EmojiSymbols />
            </Avatar>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Paper className={clsx(classes.paper, classes.infoCardsHeight)} square>
          <Container className={clsx(infoStyles.row, infoStyles.card)}>
            <Container>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Nº de Materias
              </Typography>
              <Typography component="h1" variant="h5" color="inherit" noWrap>
                6 Matérias
              </Typography>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Media por semestre: 5
              </Typography>
            </Container>
            <Avatar aria-label="recipe" className={infoStyles.avatar}>
              <AccountTree />
            </Avatar>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Paper className={clsx(classes.paper, classes.infoCardsHeight)} square>
          <Container className={clsx(infoStyles.row, infoStyles.card)}>
            <Container>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Carga Obrigatoria
              </Typography>
              <Typography component="h1" variant="h5" color="inherit" noWrap>
                1.255 Horas
              </Typography>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Faltando: 460 horas
              </Typography>
            </Container>
            <Avatar aria-label="recipe" className={infoStyles.avatar}>
              <AccessTime></AccessTime>
            </Avatar>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Paper className={clsx(classes.paper, classes.infoCardsHeight)} square>
          <Container className={clsx(infoStyles.row, infoStyles.card)}>
            <Container>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Carga Complem.
              </Typography>
              <Typography component="h1" variant="h5" color="inherit" noWrap>
                55 pontos
              </Typography>
              <Typography
                component="h1"
                variant="caption"
                color="inherit"
                noWrap
              >
                Faltando: 45 pontos
              </Typography>
            </Container>
            <Avatar aria-label="recipe" className={infoStyles.avatar}>
              <Apps />
            </Avatar>
          </Container>
        </Paper>
      </Grid>
    </>
  );
}
