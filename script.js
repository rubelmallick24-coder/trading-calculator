// Tab Switching
function openTab(evt, tabName) {
  let i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Number Count Animation
function animateValue(id, start, end, duration, prefix="", suffix="") {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = prefix + (progress * (end - start) + start).toFixed(2) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Lot Size Calculator
function calcLot() {
  let balance = parseFloat(document.getElementById("balance").value);
  let riskPercent = parseFloat(document.getElementById("riskPercent").value);
  let sl = parseFloat(document.getElementById("sl").value);

  if (!balance || !riskPercent || !sl) {
    document.getElementById("lotResult").innerHTML = "⚠️ Enter all fields.";
    return;
  }

  let riskAmount = balance * (riskPercent / 100);
  let lotSize = (riskAmount / sl) / 10;
  document.getElementById("lotResult").innerHTML = "✅ Lot Size: <strong id='lotVal'></strong>";
  animateValue("lotVal", 0, lotSize, 1000, "", "");
}

// Risk/Reward Calculator
function calcRR() {
  let entry = parseFloat(document.getElementById("entry").value);
  let slPrice = parseFloat(document.getElementById("slPrice").value);
  let tpPrice = parseFloat(document.getElementById("tpPrice").value);

  if (!entry || !slPrice || !tpPrice) {
    document.getElementById("rrResult").innerHTML = "⚠️ Enter all fields.";
    return;
  }

  let risk = Math.abs(entry - slPrice);
  let reward = Math.abs(tpPrice - entry);
  let rr = reward / risk;
  document.getElementById("rrResult").innerHTML = "🎯 Risk/Reward: <strong id='rrVal'></strong>R";
  animateValue("rrVal", 0, rr, 1000);
}

// Profit Calculator
function calcProfit() {
  let pips = parseFloat(document.getElementById("pips").value);
  let lots = parseFloat(document.getElementById("lots").value);

  if (!pips || !lots) {
    document.getElementById("profitResult").innerHTML = "⚠️ Enter all fields.";
    return;
  }

  let profit = pips * lots * 10;
  document.getElementById("profitResult").innerHTML = "💰 Profit: <strong id='profitVal'></strong>";
  animateValue("profitVal", 0, profit, 1200, "$");
}

// Auto Show Popup Ad after 10s
window.onload = function() {
  setTimeout(() => {
    document.getElementById("popupAd").style.display = "flex";
  }, 10000);
};
