function loadIframe(url) {
  const iframeContainer = document.getElementById("iframe-container");
  iframeContainer.innerHTML = "";
  
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "100%";
  
  iframeContainer.appendChild(iframe);
}
