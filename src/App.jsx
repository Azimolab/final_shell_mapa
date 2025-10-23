import { useState } from 'react';
import SVGMap from './components/SVGMap';
import Toolbar from './components/Toolbar';
import './style.css';
import './App.css';

function App() {
  const [selectedArea, setSelectedArea] = useState('rio');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [activeLegendItems, setActiveLegendItems] = useState({
    exploration: true,
    production: true,
    decommissioning: true
  });

  const handleAreaSelect = (areaId) => {
    setSelectedArea(areaId);
  };

  const handleLegendToggle = (itemId) => {
    setActiveLegendItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="app-container">
      <Toolbar
        selectedArea={selectedArea}
        selectedYear={selectedYear}
        onAreaSelect={handleAreaSelect}
        onLegendToggle={handleLegendToggle}
        activeLegendItems={activeLegendItems}
      />
      <SVGMap
        selectedYear={selectedYear}
        activeLegendItems={activeLegendItems}
      />
    </div>
  );
}

export default App;

