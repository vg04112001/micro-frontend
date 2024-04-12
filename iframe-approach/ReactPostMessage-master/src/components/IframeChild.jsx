import React, { useEffect, useState } from "react";
export const IframeChild = () => {
  const [recievedMessage, setRecievedMessage] = useState(null);
  // const [msg, setMsg] = useState('');

  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      if(typeof event.data !== 'object'){
        setRecievedMessage("Got this message from parent: " + event.data);
      }
    };

    window.addEventListener('message', receiveMessage);

    return () => {
      window.removeEventListener('message', receiveMessage);
    };

    // window.addEventListener("message", function (e) {
    //   if (e.origin !== "http://localhost:3000") return;
    //   console.log(e.data)
    //   if(typeof e.data !== 'object'){
    //     setRecievedMessage("Got this message from parent: " + e.data);
    //   }
    // });
  }, []);
  
  const sendMessage = () => {
    window.parent.postMessage('Hi Dad', "http://localhost:3000");
  };

  // const user = {
  //   name: 'ABC',
  //   email: 'a@b.com',
  // }
  // const handler = () => {
  //   props.sendData(user)
  // }

  return (
    <div>
      <h2>Child iFrame</h2>
      <button onClick={sendMessage}>Send message to parent</button>
      {/* <button onClick={handler}>Send message to parent</button> */}
      <p>{recievedMessage}</p>
    </div>
  );
};
