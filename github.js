async function pushCodeToGitHub(filename, code) {
    const token = await authenticateWithGitHub();
  
    const response = await fetch("https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/contents/" + filename, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `Add ${filename}`,
        content: btoa(code)
      })
    });
  
    return response.ok;
  }
  
  async function authenticateWithGitHub() {
    return new Promise((resolve) => {
      chrome.identity.launchWebAuthFlow(
        {
          url: `https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_OAUTH_CLIENT_ID&scope=repo`,
          interactive: true
        },
        (redirectUrl) => {
          const params = new URLSearchParams(new URL(redirectUrl).search);
          resolve(params.get("code"));
        }
      );
    });
  }
  