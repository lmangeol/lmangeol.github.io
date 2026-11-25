function includeHTML(elementId, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(elementId).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});
