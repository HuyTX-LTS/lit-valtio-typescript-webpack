// import './route/index';

import { render } from "lit";
import renderApp from "./components/chat";
import { state } from "./store/store";
import { subscribe } from "valtio/vanilla";

const App = () => {
  render(renderApp(), document.getElementById("app") as HTMLElement);
};

subscribe(state, () => {
  App();
});

App();
