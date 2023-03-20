function loadIframe(url) {
  const iframeContainer = document.getElementById("iframe-container");
  iframeContainer.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.width = "500%";
  iframe.height = "500%";

  iframeContainer.appendChild(iframe);
}
