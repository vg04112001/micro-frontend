import reportWebVitals from './reportWebVitals';
/** src/index.jsx */

import React from "react";
import ReactDOM from "react-dom";

// Name of our class doesn't matter.
class EvilPlanElement extends HTMLElement {
  // Happens every time an instance of this element is mounted
  // (can be called again when moved from one container element to another)
  connectedCallback() {
    ReactDOM.render(
      <button onClick={() => alert("one million dollars!")}>
        Hold the world ransom for...
      </button>,
      this
    );
  }
}

const tagName = "evil-plan";

if (!window.customElements.get(tagName)) {
  // prevent rerunning on hot module reloads
  // register to be rendered in place of every <evil-plan> tag
  window.customElements.define(tagName, EvilPlanElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
