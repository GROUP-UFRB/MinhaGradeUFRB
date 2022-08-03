import { Container, Grid } from "@material-ui/core";
import {
  DoubleRow,
  FormGrid,
  InfoGrids,
  SemesterDoubleRow,
  SemesterHistoric,
  SubjectList,
  SubjectRadar,
} from "../components/grids";
import { useDashStyle } from "../styles/dashboard";

export default function Dashboard() {
  const classes = useDashStyle();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <InfoGrids />
        {/* Double Row */}
        <DoubleRow xs={12} md={5} lg={4}>
          <FormGrid />
          <SemesterDoubleRow />
        </DoubleRow>
        {/* Bar Chart */}
        <DoubleRow>
          <SemesterHistoric />
          <Grid container spacing={3}>
            <SubjectList />
            <SubjectRadar />
          </Grid>
        </DoubleRow>
      </Grid>
    </Container>
  );
}
