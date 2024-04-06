export const downloadBase64File = (base64Data: string, fileName: string) => {
  const element = document.createElement("a");
  element.setAttribute("href", base64Data);
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};
