import { BrowserRouter, Switch, Route } from "react-router-dom";
import AnimPresence from "./components/AnimPresence";
import Basic from "./components/Basic";
import Gesture from "./components/Gesture";
import Main from "./components/Main";
import MotionValue from "./components/MotionValue";
import Popup from "./components/Popup";
import Slider from "./components/Slider";
import SVG from "./components/SVG";
import Variants from "./components/Variants";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/popup`}>
          <Popup />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/basic`}>
          <Basic />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/variants`}>
          <Variants />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/gesture`}>
          <Gesture />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/motion`}>
          <MotionValue />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/svg`}>
          <SVG />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/anim-presence`}>
          <AnimPresence />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/slider`}>
          <Slider />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}`}>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
