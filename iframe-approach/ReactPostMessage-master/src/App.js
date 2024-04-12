import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IframeParent } from "./components/IframeParent";
import { IframeChild } from "./components/IframeChild";
import { WindowParent } from "./components/WindowParent";
import { WindowChild } from "./components/WindowChild";
import Home  from './components/Home'
export const App = () => {
  return (
    <div style={{ margin: "0px 20px" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/iframe/" component={IframeParent} />
          <Route exact path="/iframe-child" component={IframeChild} />
          <Route exact path="/window/" component={WindowParent} />
          <Route exact path="/window-child" component={WindowChild} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
