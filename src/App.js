import React, { Component } from "react";
import {
  INITAL_POSITION,
  MAX_Y,
  MIN_X,
  MAX_X,
  MIN_Y,
  X_VALUES,
  Y_VALUES,
  TIME_TO_MOVE_PER_CELL
} from "./constants";
import { Table, Tr, Td } from "./components/table";
import { Container, Arrow, Navigator, Button } from "./components/elements";
import Robot from "./components/robot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: INITAL_POSITION,
      xIndex: 1,
      yIndex: 1,
      moving: false
    };
  }

  travelToPosition = (derection, steps) => {
    const { xIndex, yIndex } = this.state;
    if (xIndex <= steps[0]) {
      setTimeout(() => {
        this.navigator(derection[0]);
        this.setState({ xIndex: xIndex + 1 }, () => {
          this.travelToPosition(derection, steps);
        });
      }, TIME_TO_MOVE_PER_CELL);
    } else if (yIndex <= steps[1]) {
      setTimeout(() => {
        this.navigator(derection[1]);
        this.setState({ yIndex: yIndex + 1 }, () => {
          this.travelToPosition(derection, steps);
        });
      }, TIME_TO_MOVE_PER_CELL);
    } else {
      this.setState({ moving: false });
    }
  };

  navigator = derection => {
    const { position } = this.state;
    let { x, y } = position;
    switch (derection) {
      case "right":
        if (x < MAX_X) {
          x++;
        }
        break;
      case "left":
        if (x > MIN_X) {
          x--;
        }
        break;
      case "top":
        if (y < MAX_Y) {
          y++;
        }
        break;
      case "bottom":
        if (y > MIN_Y) {
          y--;
        }
        break;
      default:
        break;
    }
    this.setState({ position: { x, y } });
  };

  onClickCell = (x, y) => {
    if (this.state.moving) {
      return false;
    }
    this.setState({ xIndex: 1, yIndex: 1, moving: true }, () => {
      const i = x - this.state.position.x;
      const j = y - this.state.position.y;
      this.travelToPosition(
        [i > 0 ? "right" : "left", j > 0 ? "top" : "bottom"],
        [Math.abs(i), Math.abs(j)]
      );
    });
  };

  renderTBody = () => {
    const { position } = this.state;
    return (
      <tbody>
        {Y_VALUES.map((y, index) => {
          return (
            <Tr key={index}>
              {X_VALUES.map((x, key) => {
                return (
                  <Td
                    id={`td${x}${y}`}
                    key={key}
                    onClick={() => this.onClickCell(x, y)}
                  >
                    {position.x === x && position.y === y && <Robot />}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </tbody>
    );
  };

  render() {
    return (
      <div className="App">
        <Container>
          <div>
            <Table>{this.renderTBody()}</Table>
          </div>
          <Navigator>
            <div>
              <Button id="top" onClick={() => this.navigator("top")}>
                <Arrow deg="270" src="./arrow.png" alt="arrow right" />
              </Button>
            </div>
            <div>
              <Button id="left" onClick={() => this.navigator("left")}>
                <Arrow deg="180" src="./arrow.png" alt="arrow right" />
              </Button>
              <Button id="right" onClick={() => this.navigator("right")}>
                <Arrow deg="0" src="./arrow.png" alt="arrow right" />
              </Button>
            </div>
            <div>
              <Button id="bottom" onClick={() => this.navigator("bottom")}>
                <Arrow deg="90" src="./arrow.png" alt="arrow right" />
              </Button>
            </div>
          </Navigator>
        </Container>
      </div>
    );
  }
}

export default App;
