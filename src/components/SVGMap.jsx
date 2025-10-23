import { useState, useEffect } from 'react';
import './SVGMap.css';

function SVGMap({ selectedYear = '2025', activeLegendItems }) {
  const [svgContent, setSvgContent] = useState('');

  // Mapeamento de ano para arquivo SVG
  const yearToFile = {
    'Pre2013': 'Pre2013.svg',
    '2013': '2013.svg',
    '2025': '2025.svg'
  };

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const filename = yearToFile[selectedYear] || '2025.svg';
        const response = await fetch(`/${filename}`);
        if (!response.ok) throw new Error(`Erro ao carregar ${filename}`);
        
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Erro ao carregar SVG:', error);
      }
    };

    loadSVG();
  }, [selectedYear]);

  // Aplicar visibilidade dos pins baseado nos filtros da legenda
  useEffect(() => {
    if (!svgContent) return;

    // Red pins (exploration)
    const redPins = document.querySelectorAll('[class*="RedPin"]');
    redPins.forEach(pin => {
      pin.style.display = activeLegendItems.exploration ? 'block' : 'none';
    });

    // Green pins (production)
    const greenPins = document.querySelectorAll('[class*="GreenPin"]');
    greenPins.forEach(pin => {
      pin.style.display = activeLegendItems.production ? 'block' : 'none';
    });

    // Gray/decommissioning pins (se existirem)
    const grayPins = document.querySelectorAll('[class*="GrayPin"], [class*="DecommissionPin"]');
    grayPins.forEach(pin => {
      pin.style.display = activeLegendItems.decommissioning ? 'block' : 'none';
    });
  }, [svgContent, activeLegendItems]);

  return (
    <div className="svg-map-container">
      <div 
        className="svg-map-content"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}

export default SVGMap;

