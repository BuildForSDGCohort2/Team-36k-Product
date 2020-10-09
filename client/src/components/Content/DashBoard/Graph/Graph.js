import React from "react";
import axios from "axios";

import { Doughnut } from "react-chartjs-2";
import classes from "./Graph.module.css";

class Graph extends React.Component {
  state = {
    ailments: [],
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Past Ailments",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
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

  generateDataPoints = (arr) => {
    // let temp = {};
    // console.log(arr);
    // for (var i = 0; i < arr.length; i++) {
    //   console.log(arr[i]);
    //   for (const v in temp) {
    //     if (temp.hasOwnProperty(v)) {
    //       temp[v] = temp[v]++;
    //     }
    //   }
    // }
  };

  componentDidMount() {
    // fetch and organise ailments
    let tempAilments = [];
    axios
      .get("/api/prescriptions")
      .then((response) => {
        //filter each pres to match the user
        tempAilments = response.data.filter(
          (item) => item.user_id === localStorage.getItem("user_id")
        );
        this.generateDataPoints(tempAilments);
      })
      .catch((error) => {
        //
        console.log(error);
      });
  }

  render() {
    return (
      <div className={classes.Container}>
        <Doughnut
          data={this.state}
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
