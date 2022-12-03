// This will be moved client side, server will only handle data retrieval

// function getFiles() {
//   const fileInput = document.querySelector('input[type="file"]');
//   if (fileInput?.file) return fileInput.files;
//   return fileInput.files;
// }

function makeFileObject(data: object) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const file = [new File([blob], "plain-utf8.txt")];

  return file;
}
