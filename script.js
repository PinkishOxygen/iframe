function changeBackground() {
        var checkBox = document.querySelector("input[type=checkbox]");
        if (checkBox.checked == true) {
          document.body.style.backgroundImage = "url('253B6CCC-3E8A-40F1-AE73-3C1A4611636D.jpeg')";
          document.querySelectorAll("#buttons-container button, #sidebar, #search-container button").forEach(function(elem) {
            elem.style.backgroundColor = "#908d9e";
          });
        } else {
          document.body.style.backgroundImage = "url('5E4F2962-8125-477E-965F-6FD590C2129E.jpeg')";
          revertColors();
        }
      }

      function revertColors() {
        document.querySelectorAll("#buttons-container button, #sidebar, #search-container button").forEach(function(elem) {
          elem.style.backgroundColor = elem.id == "menu-btn" ? "transparent" : "#bfbfbf";
        });
      }

 function loadIframe(url) {
        const iframeContainer = document.getElementById("iframe-container");
        iframeContainer.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.style.width = "100%";
        iframe.style.height = (window.innerHeight - 50) + "px";
        iframeContainer.appendChild(iframe);
      }
      localStorage.setItem("sLink", sLink);

 // Add the toggleSidebar function
      function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const menuBtn = document.getElementById("menu-btn");
        const isOpen = sidebar.style.right === "0px";
        sidebar.style.right = isOpen ? "-300px" : "0px";
        menuBtn.innerHTML = isOpen ? "&#9776;" : "&#x2715;";
        if (checkBox.checked == true) {
          sidebar.style.backgroundColor = "#908d9e";
        } else {
          sidebar.style.backgroundColor = "#bfbfbf";
        }
      }
