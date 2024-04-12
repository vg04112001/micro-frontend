document.addEventListener('DOMContentLoaded', function () {
  const messageEle = document.getElementById('message');
  const frameEle = document.getElementById('frame');

  window.addEventListener('message', function (e) {
      const data = JSON.parse(e.data);
      const date = new Date(data.date).toLocaleTimeString('en-US');

      messageEle.innerHTML = "Receive " + data.message + " at " + date + "<br>" + messageEle.innerHTML;
  });

  document.getElementById('sendToIframe').addEventListener('click', function () {
      const message = JSON.stringify({
          message: 'Hello from window',
          date: Date.now(),
      });
      frameEle.contentWindow.postMessage(message, '*');
  });
});