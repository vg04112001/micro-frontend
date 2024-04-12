// WindowChild.js
import React, { useEffect, useState } from "react";

export const WindowChild = () => {
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== "http://localhost:3000") return;
      if(typeof event.data === 'string'){
        setReceivedMessage("Got this message from parent: " + event.data);
      }
      // let customMsg = JSON.stringify(event.data);
      // console.log('vdasfhdzdhjdjsau', customMsg)
      // if(customMsg){
      //   setReceivedMessage("Got this message from parent: " + (customMsg));
      // }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const sendMessage = () => {
    window.opener.postMessage("Hi dad!", "http://localhost:3000");
  };

  return (
    <div>
      <h2>Child Window</h2>
      <button onClick={sendMessage}>Send message to parent</button>
      <p>{receivedMessage}</p>
    </div>
  );
};
