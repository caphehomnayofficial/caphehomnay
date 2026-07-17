'use strict';

const marketTicker = [
  { label: 'Robusta (London)', value: '3,714', change: '-172', direction: 'down' },
  { label: 'Arabica (New York)', value: '415.66', change: '+34,28', direction: 'up' },
  { label: 'Arabica (Brazil)', value: '420.80', change: '-18,45', direction: 'down' },
  { label: 'USD/VND', value: '26.040', change: '0', direction: 'up' }
];

const regions = [
  { id: 'dak-lak', name: 'Đắk Lắk', price: 98400, change: '+1.200', percent: '+1,23%', points: [18,17,16,21,19,28,24,34,31,42,38,46] },
  { id: 'gia-lai', name: 'Gia Lai', price: 98400, change: '+1.200', percent: '+1,23%', points: [19,18,17,22,18,29,25,33,30,41,37,45] },
  { id: 'lam-dong', name: 'Lâm Đồng', price: 97900, change: '+1.200', percent: '+1,24%', points: [17,18,15,20,17,26,23,31,28,38,35,42] },
  { id: 'dak-nong', name: 'Đắk Nông', price: 98500, change: '+1.200', percent: '+1,23%', points: [20,18,19,24,21,31,27,36,32,43,39,48] }
];

const worldPrices = [
  { name: 'Robusta (London)', value: '3.872', unit: 'USD/tấn', change: '-4,70%', direction: 'down' },
  { name: 'Arabica (New York)', value: '415.66', unit: 'cent USD/lb', change: '+8,99%', direction: 'up' },
  { name: 'Arabica (Brazil)', value: '420.80', unit: 'USD/60kg', change: '-4,20%', direction: 'down' }
];

const chartData = [89875,89175,89250,88475,88625,89325,90325,89750,89750,89125,90325,91900,92900,92725,92725,96675,94650,92150,98200,95100,95100,95900,97100,98300,98300];
const numberFormat = new Intl.NumberFormat('vi-VN');

function renderTicker() {
  const track = document.getElementById('tickerTrack');
  track.innerHTML = marketTicker.map(item => `
    <span class="ticker-item">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <b class="${item.direction === 'up' ? 'positive' : 'negative'}">${item.direction === 'up' ? '▲' : '▼'} ${item.change}</b>
    </span>`).join('');
}

function renderRegions() {
  const grid = document.getElementById('regionGrid');
  grid.innerHTML = regions.map(region => {
    const points = region.points.map((y, index) => `${index * (100 / (region.points.length - 1))},${55 - y}`).join(' ');
    return `<article class="region-card reveal" data-region="${region.id}">
      <div class="region-top"><h3>${region.name}</h3><span class="region-change">▲ ${region.percent}</span></div>
      <div class="region-price">${numberFormat.format(region.price)} <span>VNĐ/kg</span></div>
      <div class="region-change">${region.change} so với phiên trước</div>
      <div class="sparkline"><svg viewBox="0 0 100 55" preserveAspectRatio="none" aria-hidden="true"><polyline points="${points}"/></svg></div>
    </article>`;
  }).join('');
}

function renderWorldPrices() {
  const list = document.getElementById('worldPriceList');
  list.innerHTML = worldPrices.map(item => `<div class="world-row"><span>${item.name}</span><div><strong>${item.value} <small>${item.unit}</small></strong><em class="${item.direction === 'up' ? 'positive' : 'negative'}">${item.change}</em></div></div>`).join('');
}

function renderSelect() {
  const select = document.getElementById('provinceSelect');
  select.innerHTML = regions.map(region => `<option value="${region.id}">${region.name}</option>`).join('');
}

function drawMainChart() {
  const svg = document.getElementById('mainChart');
  if (!svg) return;
  const width = 520, height = 220, padX = 10, padY = 20;
  const min = Math.min(...chartData) - 900;
  const max = Math.max(...chartData) + 400;
  const x = index => padX + index * ((width - padX * 2) / (chartData.length - 1));
  const y = value => height - padY - ((value - min) / (max - min)) * (height - padY * 2);
  const line = chartData.map((value, index) => `${index === 0 ? 'M' : 'L'}${x(index).toFixed(1)},${y(value).toFixed(1)}`).join(' ');
  const area = `${line} L${x(chartData.length - 1)},${height - padY} L${x(0)},${height - padY} Z`;
  svg.querySelector('.chart-line').setAttribute('d', line);
  svg.querySelector('.chart-area').setAttribute('d', area);
  svg.querySelector('.chart-grid').innerHTML = [45,90,135,180].map(row => `<line x1="0" y1="${row}" x2="520" y2="${row}"></line>`).join('');
  svg.querySelector('.chart-points').innerHTML = chartData.filter((_, index) => index % 4 === 0 || index === chartData.length - 1).map((value, filteredIndex) => {
    const index = filteredIndex === Math.ceil(chartData.length / 4) ? chartData.length - 1 : filteredIndex * 4;
    return `<circle cx="${x(index)}" cy="${y(chartData[index])}" r="4"><title>${numberFormat.format(chartData[index])} đ/kg</title></circle>`;
  }).join('');
}

function sanitizeNumeric(value) {
  return Number(String(value).replace(/[^0-9]/g, '')) || 0;
}

function updateRevenue() {
  const price = sanitizeNumeric(document.getElementById('priceInput').value);
  const quantity = sanitizeNumeric(document.getElementById('quantityInput').value);
  document.getElementById('revenueResult').textContent = `${numberFormat.format(price * quantity)} đ`;
}

function setupCalculator() {
  const select = document.getElementById('provinceSelect');
  const priceInput = document.getElementById('priceInput');
  const quantityInput = document.getElementById('quantityInput');
  select.addEventListener('change', () => {
    const region = regions.find(item => item.id === select.value);
    if (region) priceInput.value = region.price;
    updateRevenue();
  });
  [priceInput, quantityInput].forEach(input => input.addEventListener('input', updateRevenue));
}

function setupMenu() {
  const button = document.getElementById('menuButton');
  const nav = document.getElementById('mobileNav');
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function setupForms() {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', () => {
    const query = document.getElementById('searchInput').value.trim();
    showToast(query ? `Bản demo chưa kết nối tìm kiếm: “${query}”` : 'Hãy nhập từ khóa cần tìm.');
  });
  document.getElementById('newsletterForm').addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();
    showToast('Đã ghi nhận email trong bản demo.');
  });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(item => observer.observe(item));
}

renderTicker();
renderRegions();
renderWorldPrices();
renderSelect();
drawMainChart();
setupCalculator();
setupMenu();
setupForms();
setupReveal();
updateRevenue();
