import "./styles.css";
import { useState } from "react";

export default function App() {
  const [formValues, setFormValues] = useState({});

  return (
    <div className="App">
      {["name", "phone", "address", "description"].map((element, index) => {
        return (
          <div key={index}>
            <div>{element}</div>
            <input
              value={formValues[element] ?? ""}
              onChange={(e) =>
                setFormValues((prev) => {
                  return {
                    ...prev,
                    [element]: e.target.value
                  };
                })
              }
            />
          </div>
        );
      })}

      <button
        style={{ marginTop: "10px" }}
        onClick={() => {
          console.log(formValues);
        }}
      >
        Submit
      </button>
    </div>
  );
}
