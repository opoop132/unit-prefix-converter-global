function encodeBase64() {
  const input = document.getElementById("input").value;
  const encoded = btoa(unescape(encodeURIComponent(input)));
  document.getElementById("output").value = encoded;
}

function decodeBase64() {
  const input = document.getElementById("input").value;
  try {
    const decoded = decodeURIComponent(escape(atob(input)));
    document.getElementById("output").value = decoded;
  } catch (e) {
    document.getElementById("output").value = "❌ Invalid Base64 input";
  }
}
