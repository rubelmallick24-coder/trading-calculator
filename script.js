// ======= Tabs Function =======
function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-button');

  // Hide all tab contents
  tabContents.forEach(tc => tc.classList.remove('active'));

  // Remove 'active' class from all buttons
  tabButtons.forEach(btn => btn.classList.remove('active'));

  // Show the selected tab content
  document.getElementById(tabName).classList.add('active');

  // Add 'active' class to clicked button
  evt.currentTarget.classList.add('active');
}

// ======= Lot Size Calculator =======
function calcLot() {
  const balance = parseFloat(document.getElementById('balance').value);
  const riskPercent = parseFloat(document.getElementById('riskPercent').value);
  const sl = parseFloat(document.getElementById('sl').value);

  if (isNaN(balance) || isNaN(riskPercent) || isNaN(sl) || sl <= 0) {
    document.getElementById('lotResult').innerText = "Please enter valid numbers.";
    return;
  }

  const lotSize = (balance * (riskPercent / 100)) / (sl * 10); // Standard formula
  document.getElementById('lotResult').innerText = `Recommended Lot Size: ${lotSize.toFixed(2)} lots`;
}

// ======= Risk/Reward Calculator =======
function calcRR() {
  const entry = parseFloat(document.getElementById('entry').value);
  const slPrice = parseFloat(document.getElementById('slPrice').value);
  const tpPrice = parseFloat(document.getElementById('tpPrice').value);

  if (isNaN(entry) || isNaN(slPrice) || isNaN(tpPrice) || entry <= 0) {
    document.getElementById('rrResult').innerText = "Please enter valid numbers.";
    return;
  }

  const risk = Math.abs(entry - slPrice);
  const reward = Math.abs(tpPrice - entry);
  const rrRatio = reward / risk;

  document.getElementById('rrResult').innerText = `Risk: ${risk.toFixed(2)}, Reward: ${reward.toFixed(2)}, R/R Ratio: ${rrRatio.toFixed(2)}`;
}

// ======= Profit Calculator =======
function calcProfit() {
  const pips = parseFloat(document.getElementById('pips').value);
  const lots = parseFloat(document.getElementById('lots').value);

  if (isNaN(pips) || isNaN(lots)) {
    document.getElementById('profitResult').innerText = "Please enter valid numbers.";
    return;
  }

  const pipValue = 10; // Standard for 1 lot in USD
  const profit = pips * lots * pipValue;

  document.getElementById('profitResult').innerText = `Estimated Profit: $${profit.toFixed(2)}`;
}

// ======= Optional: Auto-close popup after 10s =====
window.onload = function() {
  const popup = document.getElementById('popupAd');
  setTimeout(() => { popup.style.display = 'none'; }, 10000);
};
