document.addEventListener("submit", (e) => {
    const codeElement = document.querySelector(".CodeMirror-code");
    const code = codeElement ? codeElement.innerText : null;
  
    if (code) {
      chrome.runtime.sendMessage({ action: "leetcodeSubmit", code });
    }
  });
  