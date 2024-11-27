document.getElementById("analyzeBtn").addEventListener("click", () => {
    const code = document.getElementById("codeInput").value;
  
    chrome.runtime.sendMessage({ type: "analyzeCode", code }, (response) => {
      const results = document.getElementById("results");
      if (response.feedback.error) {
        results.textContent = "Error: " + response.feedback.error;
      } else {
        results.textContent = "Feedback:\n" + JSON.stringify(response.feedback, null, 2);
      }
    });
  });
  
  document.getElementById("connectGitHub").addEventListener("click", () => {
    chrome.identity.launchWebAuthFlow(
      {
        url: `https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_OAUTH_CLIENT_ID&scope=repo`,
        interactive: true
      },
      (redirectUrl) => {
        const accessToken = new URL(redirectUrl).searchParams.get("access_token");
        localStorage.setItem("githubAccessToken", accessToken);
        alert("GitHub connected successfully!");
      }
    );
  });
  