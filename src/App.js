import React, { Component } from "react";
import Postform from "./Component/Postform";
import Postlist from "./Component/Postlist";
class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Postlist />
        <Postform />
      </div>
    );
  } //render
}
export default App;