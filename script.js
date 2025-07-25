// Toggle collapsible sections
document.querySelectorAll(".collapsible-header").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".collapsible-group").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// PDF Viewer Logic
function loadPDF(filePath) {
  const frame = document.getElementById("pdfFrame");
  frame.src = filePath;
}
