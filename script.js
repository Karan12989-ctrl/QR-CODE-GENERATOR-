// Switch Tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Generate QR Code
document.getElementById("generateBtn").addEventListener("click", () => {
  const activeTab = document.querySelector(".tab-btn.active").dataset.tab;
  let data = "";

  if (activeTab === "url") {
    data = document.getElementById("urlInput").value;
  } else if (activeTab === "text") {
    data = document.getElementById("textInput").value;
  } else if (activeTab === "wifi") {
    const name = document.getElementById("wifiName").value;
    const pass = document.getElementById("wifiPassword").value;
    data = WIFI:T:WPA;S:${name};P:${pass};;;
  }

  if (data.trim() === "") {
    alert("Please enter some data!");
    return;
  }

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: data,
    width: 200,
    height: 200
  });
});

// Download QR Code
document.getElementById("downloadBtn").addEventListener("click", function() {
  let qrCanvas = document.querySelector("#qrcode canvas");
  if (qrCanvas) {
    let link = document.createElement("a");
    link.href = qrCanvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  } else {
    alert("Please generate a QR code first!");
  }
});// Switch Tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Generate QR Code
document.getElementById("generateBtn").addEventListener("click", () => {
  const activeTab = document.querySelector(".tab-btn.active").dataset.tab;
  let data = "";

  if (activeTab === "url") {
    data = document.getElementById("urlInput").value;
  } else if (activeTab === "text") {
    data = document.getElementById("textInput").value;
  } else if (activeTab === "wifi") {
    const name = document.getElementById("wifiName").value;
    const pass = document.getElementById("wifiPassword").value;
    data = WIFI:T:WPA;S:${name};P:${pass};;;
  }

  if (data.trim() === "") {
    alert("Please enter some data!");
    return;
  }

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: data,
    width: 200,
    height: 200
  });
});

// Download QR Code
document.getElementById("downloadBtn").addEventListener("click", function() {
  let qrCanvas = document.querySelector("#qrcode canvas");
  if (qrCanvas) {
    let link = document.createElement("a");
    link.href = qrCanvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  } else {
    alert("Please generate a QR code first!");
  }
});