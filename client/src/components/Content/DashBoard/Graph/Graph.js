import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import classes from "./Graph.module.css";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Past Ailments",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

class Graph extends React.Component {
  render() {
    return (
      <div className={classes.Container}>
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: "Past Ailments",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      </div>
    );
  }
}

export default Graph;
