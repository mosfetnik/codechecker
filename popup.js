document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const code = document.getElementById("codeInput").value;
  if (!code) return alert("Please paste your code.");
  
  const feedback = await analyzeCode(code);
  document.getElementById("results").innerText = feedback || "No suggestions.";
});

document.getElementById("pushToGitHubBtn").addEventListener("click", async () => {
  const code = document.getElementById("codeInput").value;
  if (!code) return alert("No code to push.");
  
  const filename = prompt("Enter a filename for this code:", "solution.js");
  if (filename) {
    const result = await pushCodeToGitHub(filename, code);
    alert(result ? "Code pushed successfully!" : "Failed to push code.");
  }
});
