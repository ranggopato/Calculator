import { useState } from "react";
import "./App.css";

function App() {
  const simbol = ["÷", "×", "-", "+", "="];
  const operation = [
    "AC",
    "CE",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const [display, setDisplay] = useState("0");
  const handleClick = (e) => {
    if (e == "AC") {
      setDisplay("0");
    } else if (e == "CE") {
      setDisplay((current) => current.slice(0, -1));
    } else if (e == "=") {
      setDisplay((current) =>
        current.includes("×" || "÷")
          ? String(eval(current.replace("×", "*").replace("÷", "/")))
          : String(eval(current))
      );
    } else {
      setDisplay((current) => (current == "0" ? e : current + e));
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="result">{display}</div>
        <div className="operation">
          {operation.map((val, index) => {
            return (
              <div
                onClick={() => {
                  handleClick(val);
                }}
                className={
                  simbol.includes(val)
                    ? "span-1-color"
                    : val == "0"
                    ? "span-2"
                    : "span-1"
                }
                key={index}
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
