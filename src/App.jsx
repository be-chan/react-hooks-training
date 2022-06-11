import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
import { ColoredMessage } from "./components/ColoredMessage";

export default function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert();
  }, [num]);
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const colorRed = {
    color: "red",
    fontSize: "16px"
  };
  const colorPink = {
    color: "pink",
    fontSize: "20px"
  };
  return (
    <div className="App">
      <h1 style={colorRed}>こんにちは</h1>
      <p>お元気ですか？</p>
      {/* <ColoredMessage color="blue" message="どうもスーパーエンジニア" /> */}
      <ColoredMessage color="red">おーいお茶</ColoredMessage>
      <p style={colorPink}>お元気ですよ！</p>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
}
