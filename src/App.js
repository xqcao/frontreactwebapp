import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

import Content from "./components/Content";
import About from "./components/About";
import Todo from "./components/Todo";
import Welcome from "./components/Welcome";
import StoreDemo from "./components/StoreDemo";
import FetchDemo from "./components/FetchDemo";
import AxiosDemo from "./components/AxiosDemo";
import ReduxDemo from "./components/ReduxDemo";
import DeployGitPage from "./components/DeployGitPage";
const routes = [
  { name: "Welcome", url: "/", component: Welcome },
  { name: "DeployGitPage", url: "/deploypages", component: DeployGitPage },
  { name: "AboutPage", url: "/about", component: About },
  { name: "TodoPage", url: "/todo", component: Todo },
  { name: "ContentPage", url: "/content", component: Content },
  { name: "StoreDemoPage", url: "/storedemo", component: StoreDemo },
  { name: "FetchDemoPage", url: "/fetchdemo", component: FetchDemo },
  { name: "AxiosDemoPage", url: "/exiosdemo", component: AxiosDemo },
  { name: "ReduxDemoPage", url: "/reduxdemo", component: ReduxDemo },
];
function App() {
  return (
    <div className="App">
      <h2>Hello React Js with store</h2>
      <ol>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((it, idx) => (
          <Route
            key={it.name + "_" + idx}
            path={it.url}
            element={<it.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
