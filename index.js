import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Greeting() {
  return (
    <div>
      <h1> Hello World</h1>
      <Person />
      <Message />
      <Image />
      <Image2 />
      <Image3 />
    </div>
  );
}

const Person = () => <h2>Brendan</h2>;
const Message = () => {
  return <p> Good to see you</p>;
};
const Image = () => {
  return <img src="Guards.jpg" alt="discworld" class="column"></img>;
};
const Image2 = () => {
  return <img src="winterchopa.jfif" alt="winter" class="winter"></img>;
};
const Image3 = () => {
  return <img src="winterIllus.jpg" alt="winteddr" class="winter"></img>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
