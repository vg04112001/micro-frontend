// import React from "react";
// import ReactDOM from "react-dom";

// // Name of our class doesn't matter.
// class EvilPlanElement extends HTMLElement {
//   // Happens every time an instance of this element is mounted
//   // (can be called again when moved from one container element to another)
//   connectedCallback() {
//     ReactDOM.render(
//       <button onClick={() => alert("one million dollars!")}>
//         Hold the world ransom for...
//       </button>,
//       this
//     );
//   }
// }

// const tagName = "evil-plan";

// if (!window.customElements.get(tagName)) {
//   // prevent rerunning on hot module reloads
//   // register to be rendered in place of every <evil-plan> tag
//   window.customElements.define(tagName, EvilPlanElement);
// }