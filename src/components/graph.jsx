import React, { Component } from "react";
import shortid from "shortid";
import Bar from "./bar";
import ToolPanel from "./toolpanel";

class Graph extends Component {
  state = {
    bars: [],
    maxHeight: 650,
    minHeight: 100,
  };

  constructor() {
    super();
    const newBars = [];
    let increment = Math.floor(
      (this.state.maxHeight - this.state.minHeight) / 52
    );
    for (let i = 0; i < 52; i++) {
      let barHeight = this.state.minHeight + i * increment;
      newBars.push({ id: shortid.generate(), size: barHeight });
    }
    this.randomizeArray(newBars);
    this.state.bars = newBars;
  }

  bubbleSort() {}

  selectionSort() {}

  insertionSort() {}

  heapSort() {}

  quickSort() {}

  mergeSort() {}

  randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  handleRandomize = () => {
    const tempBars = this.state.bars;
    this.randomizeArray(tempBars);
    this.setState({ bars: tempBars });
  };

  handleSort = (method) => {
    switch (method) {
      case "bubble":
        break;
      case "selection":
        break;
      case "insertion":
        break;
      case "heap":
        break;
      case "quick":
        break;
      case "merge":
        break;
      default:
        break;
    }
  };

  handleResize = (size) => {
    const newBars = [];
    let increment = Math.floor(
      (this.state.maxHeight - this.state.minHeight) / size
    );
    for (let i = 0; i < size; i++) {
      let barHeight = this.state.minHeight + i * increment;
      newBars.push({ id: shortid.generate(), size: barHeight });
    }
    this.randomizeArray(newBars);
    this.setState({ bars: newBars });
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center w-75">
          {this.state.bars.map((bar) => (
            <Bar key={bar.id} size={bar.size} />
          ))}
        </div>
        <ToolPanel
          onResize={this.handleResize}
          onSort={this.handleSort}
          onRandomize={this.handleRandomize}
        />
      </div>
    );
  }
}

export default Graph;
