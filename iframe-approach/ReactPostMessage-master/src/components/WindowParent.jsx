// WindowParent.js
import React, { useEffect, useState } from "react";

export const WindowParent = () => {
  const [receivedMessage, setReceivedMessage] = useState("");
  const [childWindow, setChildWindow] = useState(null);

  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== "http://localhost:3000") return;
      if(typeof event.data === 'string'){
        setReceivedMessage("Got this message from child: " + event.data);
      }
      // setReceivedMessage("Got this message from child: " + event.data);
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const openWindow = () => {
    const newWindow = window.open(
      "http://localhost:3000/window-child/",
      "childWindow",
      "width=500,height=500"
    );
    setChildWindow(newWindow);
  };

  const sendMessage = () => {
    if (childWindow) {
      childWindow.postMessage("Hello son!", "http://localhost:3000");
    }
  };

  return (
    <div>
      <h1>Parent Window</h1>
      <button onClick={openWindow}>Open Window</button>
      <br />
      <br />
      <button onClick={sendMessage}>Send message to child</button>
      <p>{receivedMessage}</p>
    </div>
  );
};
