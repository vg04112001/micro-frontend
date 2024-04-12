import React, { useRef, useEffect, useState } from "react";
export const IframeParent = () => {
  const iFrameRef = useRef(null);
  const [recievedMessage, setRecievedMessage] = useState(null);

  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      // console.log(event.data)
      if(typeof event.data !== 'object'){
        setRecievedMessage("Got this message from child: " + event.data);
      }
    };

    window.addEventListener('message', receiveMessage);

    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  const sendMessage = () => {
    if (!iFrameRef.current) return;
    iFrameRef.current.contentWindow.postMessage(
      "Hello son!",
      "http://localhost:3000"
    );
  };

    //   window.addEventListener("message", function (e) {
    //     if (e.origin !== "http://localhost:3000") return;
    //     console.log(e.data)
    //     setRecievedMessage("Got this message from parent: " + e.data);
    //     // if(typeof e.data !== 'object'){
    //     //   console.log("11111");
    //     //   setRecievedMessage("Got this message from parent: " + e.data);
    //     // }
    //     // else {
    //     //   console.log("2222");
    //     //   setRecievedMessage("Got this message from parent: ", 'fdvdvdvdvdvd');
    //     // }
    //   });

  // const [custom, setCustom] = useState({
  //   name: '',
  //   email: '',
  // })

  // const dataSend = (custom) => {
  //   setCustom(custom)
  // }
  return (
    <div>
      <h1>Parent iFrame</h1>
      {/* <h1>{custom.email}</h1> */}
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        Send message to child
      </button>

      <br />
      <br />
      
      {/* <IframeChild sendData={dataSend}/> */}
      <iframe
        ref={iFrameRef}
        src="/iframe-child/"
        width="600"
        height="300"
        title="Child iframe"
        // sendData={dataSend}
        // onLoad={handleIframeLoad}
      ></iframe>

      <p>{recievedMessage}</p>
    </div>
  );
};
