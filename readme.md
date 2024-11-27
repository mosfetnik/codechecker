# 🚀 AI-Powered Code Reviewer Chrome Extension  

![Extension Icon](https://user-images.githubusercontent.com/00000000/icon.png)

A feature-rich Chrome Extension for developers to:  
- Get **AI-powered code reviews** using the **Gemini Nano** model.  
- Push code submissions from LeetCode or other platforms directly to **GitHub**.  
- Save time by automating repetitive tasks in your coding workflow.  

---

## 🎯 Features  
✅ **AI Code Review**: Analyze code snippets for errors, optimizations, and suggestions.  
✅ **GitHub Integration**: Automatically push LeetCode submissions to your GitHub repository.  
✅ **Code Submission Auto-Detection**: Detects when code is submitted on platforms like LeetCode.  
✅ **Manual Code Input**: Copy-paste any code snippet for instant feedback.  

---

## 🛠️ File Structure  
Here’s how the extension is organized:  
```plaintext  
ai-code-reviewer/
├── manifest.json         # Chrome Extension configuration  
├── background.js         # Handles AI code analysis and GitHub integration  
├── content.js            # Detects LeetCode submissions  
├── popup.html            # Extension interface  
├── popup.js              # Handles user actions and AI communication  
├── styles.css            # Popup styling  
├── github.js             # GitHub API functions  
├── leetcode.js           # LeetCode code submission logic  
├── gemini-nano.js        # AI analysis using Gemini Nano  
├── icon.png              # Extension icon  
