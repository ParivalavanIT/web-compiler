const updatePreview = () => {
  var code = document.getElementById("codeInput").value;
  var previewFrame = document.getElementById("previewFrame");
  var previewDocument =
    previewFrame.contentDocument || previewFrame.contentWindow.document;
  previewDocument.open();
  previewDocument.write(code);
  previewDocument.close();
}
