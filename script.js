const iframeContainer = document.getElementById("iframe-container");

const iframe = document.createElement("iframe");
iframe.src = "https://fastgpt.app";
iframe.width = "100%";
iframe.height = "100%";

iframeContainer.appendChild(iframe);
