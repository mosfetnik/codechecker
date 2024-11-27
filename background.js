import { pushToGitHub } from "./github.js";
import { analyzeWithGeminiNano } from "./gemini-nano.js";

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "leetcodeSubmission") {
    const code = message.code;
    const confirmPush = confirm(
      "Code detected on LeetCode submission! Do you want to push it to your GitHub repository?"
    );
    if (confirmPush) {
      const fileName = prompt("Enter the filename (e.g., problem_name.js):", "solution.js");
      if (fileName) {
        const response = await pushToGitHub(fileName, code);
        if (response) alert("Code successfully pushed to GitHub!");
        else alert("Failed to push code to GitHub.");
      }
    }
  } else if (message.type === "analyzeCode") {
    const feedback = await analyzeWithGeminiNano(message.code);
    sendResponse({ feedback });
  }
});
