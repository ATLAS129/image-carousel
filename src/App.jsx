import { useState } from "react";
import { dataImages } from "./data";

export default function App() {
  const [selectedId, setSelectedId] = useState(0);
  const buttonStyle = dataImages[selectedId].buttonStyle;

  function handleNextImage() {
    setSelectedId(selectedId + 1);
    if (selectedId >= dataImages.length - 1) {
      setSelectedId(0);
    }
  }

  function handlePrevImage() {
    setSelectedId(selectedId - 1);
    if (selectedId <= 0) {
      setSelectedId(dataImages.length - 1);
    }
  }

  return (
    <div className="App">
      <img
        src={dataImages[selectedId].imageUrl}
        alt={dataImages[selectedId].alt}
        width={300}
      />
      <div className="buttons">
        <button onClick={handlePrevImage} style={buttonStyle}>
          {"<"}
        </button>
        <button onClick={handleNextImage} style={buttonStyle}>
          {">"}
        </button>
      </div>
    </div>
  );
}
