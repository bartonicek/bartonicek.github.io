import "./style.css";
import html from "solid-js/html";

const app = document.querySelector<HTMLDivElement>("#app")!;

const heading = html`<h1>Adam Bartonicek</h1>`;
app.appendChild(heading);

const blurb = html`<p />`;
blurb.innerText =
  "Hi, my name is Adam. I am interested in data science and visualization";

app.appendChild(blurb);
