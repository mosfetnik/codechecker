export async function analyzeWithGeminiNano(code) {
    try {
      const response = await fetch("https://gemini-nano-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_GEMINI_NANO_API_KEY`
        },
        body: JSON.stringify({ code })
      });
  
      if (response.ok) {
        const feedback = await response.json();
        return feedback; // Return Gemini Nano's feedback
      } else {
        console.error("Gemini Nano API error:", await response.text());
        return { error: "Failed to analyze code with Gemini Nano." };
      }
    } catch (error) {
      console.error("Error communicating with Gemini Nano:", error);
      return { error: "Error analyzing code." };
    }
  }
  