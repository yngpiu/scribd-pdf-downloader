document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const delayRange = document.getElementById("delay-range");
  const delayValue = document.getElementById("delay-value");
  const pulseDot = document.getElementById("pulse-dot");
  const statusText = document.getElementById("status-text");
  const statusDetail = document.getElementById("status-detail");
  const progressContainer = document.getElementById("progress-container");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const progressPercent = document.getElementById("progress-percent");
  const progressCount = document.getElementById("progress-count");

  let activeTabId = null;

  // 1. Sync delay slider with displayed text value
  delayRange.addEventListener("input", (e) => {
    delayValue.innerText = `${e.target.value}ms`;
  });

  // 2. Check if active tab is a valid Scribd document page
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (!activeTab) return;
    
    activeTabId = activeTab.id;
    const url = activeTab.url || "";
    const isScribd = url.includes("scribd.com/document/") || 
                     url.includes("scribd.com/doc/") || 
                     url.includes("scribd.com/embeds/");

    if (!isScribd) {
      startButton.disabled = true;
      statusText.innerText = "Unsupported Page";
      statusDetail.innerText = "Please navigate to a valid Scribd document page to start.";
      pulseDot.className = "pulse-dot error";
    }
  });

  // 3. Handle Start Downloader action
  startButton.addEventListener("click", () => {
    if (!activeTabId) return;

    chrome.tabs.get(activeTabId, (tab) => {
      const url = tab.url || "";
      const match = url.match(/https:\/\/www\.scribd\.com\/(?:document|doc)\/(\d+)\//);

      if (match) {
        // It's a standard document page. We must redirect to the embed page for clean printing.
        const docId = match[1];
        const scrollDelay = parseInt(delayRange.value, 10);
        const embedUrl = `https://www.scribd.com/embeds/${docId}/content?start_download=true&scroll_delay=${scrollDelay}&original_url=${encodeURIComponent(url)}`;
        
        chrome.tabs.update(activeTabId, { url: embedUrl });
        window.close(); // Close the popup since the download runs automatically in the page tab
        return;
      }

      // If it's already an embed page, run the normal communication flow
      startButton.disabled = true;
      startButton.querySelector(".btn-text").innerText = "Running...";
      progressContainer.classList.remove("hidden");
      progressBarFill.style.width = "0%";
      progressPercent.innerText = "0%";
      progressCount.innerText = "Initializing...";
      
      pulseDot.className = "pulse-dot active";
      statusText.innerText = "Starting...";
      statusDetail.innerText = "Connecting to the page script...";

      const scrollDelay = parseInt(delayRange.value, 10);

      // Send start message to content script
      chrome.tabs.sendMessage(activeTabId, { action: "START_DOWNLOAD", scrollDelay }, (response) => {
        if (chrome.runtime.lastError) {
          statusText.innerText = "Activation Required";
          statusDetail.innerText = "Please refresh your Scribd tab to initialize the downloader script.";
          pulseDot.className = "pulse-dot error";
          
          startButton.disabled = false;
          startButton.querySelector(".btn-text").innerText = "Start Downloader";
          progressContainer.classList.add("hidden");
        }
      });
    });
  });

  // 4. Listen for progress updates from the content script (used if popup stays open on embed pages)
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "PROGRESS") {
      updateUI(message);
    } else if (message.action === "ERROR") {
      handleError(message.message);
    }
  });

  function updateUI(msg) {
    if (msg.status === "scrolling") {
      pulseDot.className = "pulse-dot active";
      statusText.innerText = "Scrolling pages...";
      statusDetail.innerText = "Chrome is scrolling to trigger lazy loading of document assets.";
      
      const percent = Math.round((msg.current / msg.total) * 100) || 0;
      progressBarFill.style.width = `${percent}%`;
      progressPercent.innerText = `${percent}%`;
      progressCount.innerText = `Page ${msg.current} / ${msg.total}`;
    } 
    else if (msg.status === "rendering") {
      pulseDot.className = "pulse-dot active";
      statusText.innerText = "Rendering document...";
      statusDetail.innerText = "Waiting for fonts, SVG layouts, and mathematical formulas to settle.";
      
      progressBarFill.style.width = "95%";
      progressPercent.innerText = "95%";
      progressCount.innerText = "Preparing print stylesheets...";
    } 
    else if (msg.status === "printing") {
      pulseDot.className = "pulse-dot active";
      statusText.innerText = "Printing...";
      statusDetail.innerText = "Opening PDF Print Dialog. Select 'Save as PDF' as your Destination.";
      
      progressBarFill.style.width = "100%";
      progressPercent.innerText = "100%";
      progressCount.innerText = "Print dialog active";
    } 
    else if (msg.status === "completed") {
      pulseDot.className = "pulse-dot success";
      statusText.innerText = "Download Ready";
      statusDetail.innerText = "Completed! The page layout has been fully restored.";
      
      startButton.disabled = false;
      startButton.querySelector(".btn-text").innerText = "Start Downloader";
    }
  }

  function handleError(errMessage) {
    pulseDot.className = "pulse-dot error";
    statusText.innerText = "Error encountered";
    statusDetail.innerText = errMessage || "An unexpected error occurred during execution.";
    
    startButton.disabled = false;
    startButton.querySelector(".btn-text").innerText = "Start Downloader";
  }
});
