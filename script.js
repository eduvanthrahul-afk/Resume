const downloadBtn = document.getElementById("downloadBtn");
const printBtn = document.getElementById("printBtn");

downloadBtn.addEventListener("click", () => {
  const html = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "E_Rahul_Resume.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

printBtn.addEventListener("click", () => {
  window.print();
});
