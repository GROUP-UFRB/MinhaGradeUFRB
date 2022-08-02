import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  PolarAngleAxis,
} from "recharts";

import { ActiveLoad, SemesterLoad } from "./charts/piecharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export function PieGraps() {
  return (
    <>
      <SemesterLoad data={data} />
      <ActiveLoad data={data} />
    </>
  );
}

const data2 = [
  {
    name: "2018.1",
    uv: 2,
    pv: 4,
    amt: 6,
  },
  {
    name: "2018.2",
    uv: 3,
    pv: 4,
    amt: 7,
  },
  {
    name: "2019.1",
    uv: 0,
    pv: 6,
    amt: 6,
  },
  {
    name: "2019.2",
    uv: 2,
    pv: 3,
    amt: 5,
  },
  {
    name: "2020.1",
    uv: 3,
    pv: 5,
    amt: 7,
  },
  {
    name: "2021.1",
    uv: 1,
    pv: 4,
    amt: 5,
  },
  {
    name: "2021.2",
    uv: 3,
    pv: 4,
    amt: 7,
  },
  {
    name: "2022.1",
    uv: 1,
    pv: 4,
    amt: 7,
  },
  {
    name: "2022.2",
    uv: 3,
    pv: 4,
    amt: 7,
  },
  {
    name: "2023.1",
    uv: 1,
    pv: 4,
    amt: 5,
  },
];

export function BarGraps() {
  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data2}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

const data3 = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarGraps() {
  return (
    <ResponsiveContainer>
      <RadarChart cx="50%" cy="50%" outerRadius={70} data={data3}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
