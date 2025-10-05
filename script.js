// Tab Navigation
function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-button');

  tabContents.forEach(content => content.classList.remove('active'));
  tabButtons.forEach(button => button.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Lot Size Calculator
function calcLot() {
  const balance = parseFloat(document.getElementById('balance').value);
  const riskPercent = parseFloat(document.getElementById('riskPercent').value);
  const sl = parseFloat(document.getElementById('sl').value);

  if (isNaN(balance) || isNaN(riskPercent) || isNaN(sl)) {
    document.getElementById('lotResult').innerHTML = 'Please fill in all fields.';
    return;
  }

  const riskAmount = (balance * riskPercent) / 100;
  const lotSize = riskAmount / sl;

  document.getElementById('lotResult').innerHTML = `Lot Size: ${lotSize.toFixed(2)}`;
}

// Risk/Reward Calculator
function calcRR() {
  const entry = parseFloat(document.getElementById('entry').value);
  const slPrice = parseFloat(document.getElementById('slPrice').value);
  const tpPrice = parseFloat(document.getElementById('tpPrice').value);

  if (isNaN(entry) || isNaN(slPrice) || isNaN(tpPrice)) {
    document.getElementById('rrResult').innerHTML = 'Please fill in all fields.';
    return;
  }

  const risk = Math.abs(entry - slPrice);
  const reward = Math.abs(tpPrice - entry);
  const rrRatio = reward / risk;

  document.getElementById('rrResult').innerHTML = `Risk: ${risk.toFixed(2)} pips<br>Reward: ${reward.toFixed(2)} pips<br>Risk/Reward Ratio: ${rrRatio.toFixed(2)}`;
}

// Profit Calculator
function calcProfit() {
  const pips = parseFloat(document.getElementById('pips').value);
  const lots = parseFloat(document.getElementById('lots').value);

  if (isNaN(pips) || isNaN(lots)) {
    document.getElementById('profitResult').innerHTML = 'Please fill in all fields.';
    return;
  }

  const profit = pips * lots * 10; // Assuming 10 USD per pip per lot
  document.getElementById('profitResult').innerHTML = `Profit: $${profit.toFixed(2)}`;
}
