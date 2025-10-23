// Estado global para controlar visibilidade dos RedPin*
let redPinsVisible = true;
let greenPinsVisible = true;

async function loadSVG(filename) {
  try {
    const response = await fetch(`/${filename}`);
    if (!response.ok) throw new Error(`Erro ao carregar ${filename}`);

    const svgText = await response.text();
    const container = document.getElementById('svgContainer');
    if (!container) throw new Error('Container #svgContainer não encontrado');
    container.innerHTML = svgText;

    setupEventListeners();
    applyRedPinsVisibility();
    applyGreenPinsVisibility();
  } catch (error) {
    console.error('Erro ao carregar SVG:', error);
  }
}

function applyRedPinsVisibility() {
  const redPins = document.querySelectorAll('[class*="RedPin"]');
  redPins.forEach(pin => {
    pin.style.display = redPinsVisible ? 'block' : 'none';
  });
}

function applyGreenPinsVisibility() {
  const greenPins = document.querySelectorAll('[class*="GreenPin"]');
  greenPins.forEach(pin => {
    pin.style.display = greenPinsVisible ? 'block' : 'none';
  });
}

function setupEventListeners() {
  // Switch maps
  document.querySelectorAll('.Date_pre2013_Inactive').forEach(el => {
    el.addEventListener('click', () => loadSVG('Pre2013.svg'));
  });
  document.querySelectorAll('.Date_2013_Inactive').forEach(el => {
    el.addEventListener('click', () => loadSVG('2013.svg'));
  });

  // Detect red/green filter buttons by their icon color/classes inside the Filter groups
  const filterGroups = Array.from(document.querySelectorAll('.Filter'));
  const redFilterButtons = filterGroups.filter(group => group.querySelector('.Icon path[fill="#DD1D21"]'));
  const greenFilterButtons = filterGroups.filter(group => group.querySelector('.Icon_2 path[fill="#008557"]'));

  redFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      redPinsVisible = !redPinsVisible;
      applyRedPinsVisibility();
    });
  });

  greenFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      greenPinsVisible = !greenPinsVisible;
      applyGreenPinsVisibility();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadSVG('2013.svg');
});
