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
  document.getElementById("lotResult").innerHTML =
    `✅ Lot Size: <strong>${lotSize.toFixed(2)}</strong>`;
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
  document.getElementById("rrResult").innerHTML =
    `🎯 Risk/Reward: <strong>${rr.toFixed(2)}R</strong>`;
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
  document.getElementById("profitResult").innerHTML =
    `💰 Profit: <strong>$${profit.toFixed(2)}</strong>`;
}

// Auto Show Popup Ad after 10s
window.onload = function() {
  setTimeout(() => {
    document.getElementById("popupAd").style.display = "flex";
  }, 10000);
};
