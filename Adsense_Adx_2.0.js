
// ✅ Script: Adsense Adx 2.0
// ✅ Runs only when URL includes "?ads=1"

(function() {
  // Check if ?ads=1 is present in URL
  const params = new URLSearchParams(window.location.search);
  if (!params.has('ads')) return; // if no ?ads=1 → stop execution

  console.log("✅ AdX Script Triggered — ?ads=1 detected");

  // Example: Create an ad container
  const adContainer = document.createElement('div');
  adContainer.id = "adx-banner";
  adContainer.style.position = "fixed";
  adContainer.style.bottom = "10px";
  adContainer.style.left = "10px";
  adContainer.style.zIndex = "9999";
  adContainer.style.background = "#fff";
  adContainer.style.border = "1px solid #ccc";
  adContainer.style.padding = "10px";
  adContainer.innerHTML = `
    <p style="margin:0;color:#333;font-size:14px;">
      🔹 AdX Script Active (Testing Mode)
    </p>
  `;
  document.body.appendChild(adContainer);

  // Example: Add your AdSense/AdX code here
  // -------------------------------
  // var adScript = document.createElement("script");
  // adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  // adScript.async = true;
  // document.head.appendChild(adScript);
  // -------------------------------

})();
