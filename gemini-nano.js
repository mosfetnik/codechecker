async function analyzeCode(code) {
  const response = await fetch("https://gemini-nano-api-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_GEMINI_NANO_API_KEY`
    },
    body: JSON.stringify({ code })
  });

  const data = await response.json();
  return data.suggestions || "No feedback available.";
}
