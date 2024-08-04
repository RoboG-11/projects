import styled from "styled-components";

import { useDarkMode } from "../../hooks/useDarkMode";
import { screenSizes, windowSizes } from "../../utils/constants";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 0.9rem 3rem;
  grid-column: 3 / span 2;
  overflow: auto;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  @media (max-width: ${screenSizes.tablet}) {
    display: flex;
    flex-direction: column;
    width: 90dvw;
    align-self: center;
    padding: 1.2rem 1.6rem;
  }
`;

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 nights",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];


function prepareData(startData, stays) {
  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();

  const startData = isDarkMode ? startDataDark : startDataLight;

  const data = prepareData(startData, confirmedStays);

  const { width } = useWindowSize();

  const colors = isDarkMode
    ? {
      totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
      extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
      text: "#e5e7eb",
      background: "#18212f",
    }
    : {
      totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
      extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
      text: "#374151",
      background: "#fff",
    };

  return (
    <ChartBox>
      <Row type="dashboard">
        <Heading as="h2">Stays Per Night Summary</Heading>
      </Row>

      <ResponsiveContainer width={"100%"} height={width >= windowSizes.tablet ? 240 : 400}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx={"50%"}
            cy={"50%"}
            paddingAngle={5}
            animationDuration={1500}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{ backgroundColor: colors.background }}

            itemStyle={{ color: "var(--color-grey-700)" }}

            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div style={{
                    backgroundColor: colors.background,
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                  }}>
                    <p style={{ color: data.color }}>
                      {data.duration}: <span style={{ fontWeight: "bold" }}>{data.value}</span>
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />

          <Legend
            verticalAlign={width >= windowSizes.tablet ? "middle" : "bottom"}
            align={width >= windowSizes.tablet ? "right" : "center"}
            layout={width >= windowSizes.tablet ? "vertical" : "horizontal"}
            width={width >= windowSizes.tablet ? "30%" : "100%"}
            iconSize={width >= windowSizes.tablet ? 17 : 16}
            iconType="circle"
            wrapperStyle={{
              paddingTop: width >= windowSizes.tablet ? 0 : 30,
              paddingBottom: width >= windowSizes.tablet ? 0 : 20
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
