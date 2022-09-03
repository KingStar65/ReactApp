import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function BookList() {
  return (
    <section>
      <Person />
      <Message />
      <Image />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
    </section>
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
const Image4 = () => {
  return (
    <video width="600" height="500" class="column" autoPlay loop muted>
      <source src="winter wakeup.mp4" type="video/mp4" />
    </video>
  );
};
const Image5 = () => {
  return (
    <div>
      <iframe
        class="videos"
        width="530"
        height="350"
        src="https://www.youtube.com/embed/RXdr8YKm0o0?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyr oscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
