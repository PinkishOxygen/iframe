function loadIframe(url) {
  const iframeContainer = document.getElementById("iframe-container");
  iframeContainer.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = (window.innerHeight - 50) + "px";

  iframeContainer.appendChild(iframe);
}
