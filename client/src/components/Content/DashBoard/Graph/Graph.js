import React from "react";
import axios from "axios";

import { Doughnut } from "react-chartjs-2";
import classes from "./Graph.module.css";

class Graph extends React.Component {
  state = {
    ailments: [],
    labels: [],
    datasets: [
      {
        label: "Past Ailments",
        backgroundColor: [],
        hoverBackgroundColor: [],
        data: [],
      },
    ],
  };

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateDataPoints = (arr) => {
    let tempLabels = [];
    let tempData = [];
    let tempBGColor = [];
    let tempFGColor = [];

    // Loop through data elements
    for (var i = 0; i < arr.length; i++){
      // Generate Legend Headings
      for(var j = 0; j < arr[i].ailments.length; j++){
        // Generate Data Points
        let t = arr[i]["ailments"][j].toString().trim();
        // console.log("Value: ", t);

        if (!tempLabels.includes(t)){
          // Create New Item and Set Count to 1
          tempLabels.push(t);
          let n = tempLabels.indexOf(t);
          tempData[n] = 1;
          // console.log("Index of T: ", n);

          //Generate Random Color;
          tempBGColor[n] = this.getRandomColor();
          tempFGColor[n] = this.getRandomColor();

        }else if (tempLabels.includes(t)){
          // Increate Data Item if exists
          let n = tempLabels.indexOf(t);
          tempData[n] = tempData[n] + 1;
          // console.log("Index of T: ", n);
        }else{
          continue;
        }
      }
    }

    return [tempLabels, {data: tempData, backgroundColor: tempBGColor, hoverBackgroundColor: tempBGColor}];
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
        let result = this.generateDataPoints(tempAilments);
        this.setState({labels: result[0], datasets: [result[1]]});
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
          width={500}
          height={500}
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
