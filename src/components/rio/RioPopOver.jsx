import './RioPopOver.css';

function RioPopOver({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="rio-popover-overlay" onClick={onClose}>
      <div className="rio-popover-container" onClick={(e) => e.stopPropagation()}>
        <div className="rio-popover-arrow" />
        <div className="rio-popover-card">
          <div className="rio-popover-content">
            <div className="rio-popover-header">
              <div className="rio-popover-location-badge">
                <div className="rio-popover-location-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.662 12.1512C28.2423 5.84098 22.7932 3 18.0068 3C18.0068 3 18.0068 3 17.9932 3C13.2203 3 7.75772 5.82732 6.338 12.1376C4.75602 19.1854 9.02871 25.1541 12.8958 28.9102C14.329 30.3034 16.1679 31 18.0068 31C19.8456 31 21.6845 30.3034 23.1042 28.9102C26.9713 25.1541 31.244 19.199 29.662 12.1512ZM18.0068 18.9941C15.6541 18.9941 13.7476 17.0683 13.7476 14.6917C13.7476 12.3151 15.6541 10.3893 18.0068 10.3893C20.3594 10.3893 22.2659 12.3151 22.2659 14.6917C22.2659 17.0683 20.3594 18.9941 18.0068 18.9941Z" fill="#343434"/>
                  </svg>
                </div>
                <div className="rio-popover-badge-text">Headquarter</div>
              </div>
              <h1 className="rio-popover-title">Rio de Janeiro</h1>
              <img 
                className="rio-popover-image" 
                src="https://api.builder.io/api/v1/image/assets/TEMP/466a77355374b0ac0f093dcd3f01ec504411c8c3?width=1670" 
                alt="Industrial facility in Rio de Janeiro" 
              />
            </div>

            <div className="rio-popover-ventures">
              <h2 className="rio-popover-ventures-title">Joint Ventures / Participações parciais</h2>
              <div className="rio-popover-venture-item">
                <img 
                  className="rio-popover-venture-logo" 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f33bd292f0e8714d11d385811b1536a230886f61?width=192" 
                  alt="Raízen logo" 
                />
                <div className="rio-popover-venture-details">
                  <h3 className="rio-popover-venture-name">Raízen JV Lubricants</h3>
                  <div className="rio-popover-venture-info">
                    <div className="rio-popover-facility-info">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.22095 26.5286H11.7209V19.1C11.7209 18.679 11.8647 18.3262 12.1522 18.0414C12.4397 17.7567 12.7959 17.6143 13.2209 17.6143H19.2209C19.6459 17.6143 20.0022 17.7567 20.2897 18.0414C20.5772 18.3262 20.7209 18.679 20.7209 19.1V26.5286H25.2209V13.1571L16.2209 6.47143L7.22095 13.1571V26.5286ZM4.22095 26.5286V13.1571C4.22095 12.6867 4.3272 12.241 4.5397 11.82C4.7522 11.399 5.04595 11.0524 5.42095 10.78L14.4209 4.09429C14.9459 3.6981 15.5459 3.5 16.2209 3.5C16.8959 3.5 17.4959 3.6981 18.0209 4.09429L27.0209 10.78C27.3959 11.0524 27.6897 11.399 27.9022 11.82C28.1147 12.241 28.2209 12.6867 28.2209 13.1571V26.5286C28.2209 27.3457 27.9272 28.0452 27.3397 28.6271C26.7522 29.209 26.0459 29.5 25.2209 29.5H19.2209C18.7959 29.5 18.4397 29.3576 18.1522 29.0729C17.8647 28.7881 17.7209 28.4352 17.7209 28.0143V20.5857H14.7209V28.0143C14.7209 28.4352 14.5772 28.7881 14.2897 29.0729C14.0022 29.3576 13.6459 29.5 13.2209 29.5H7.22095C6.39595 29.5 5.6897 29.209 5.1022 28.6271C4.5147 28.0452 4.22095 27.3457 4.22095 26.5286Z" fill="#616161"/>
                      </svg>
                      <span className="rio-popover-facility-text">Planta de Mistura de Óleos Lubrificantes</span>
                    </div>
                    <span className="rio-popover-separator">•</span>
                    <div className="rio-popover-ownership-info">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5209 15.2H26.5559C26.2309 12.8167 25.2397 10.7962 23.5822 9.13875C21.9247 7.48125 19.9043 6.49 17.5209 6.165V15.2ZM14.9209 26.835V6.165C12.2993 6.49 10.1272 7.63292 8.4047 9.59375C6.6822 11.5546 5.82095 13.8567 5.82095 16.5C5.82095 19.1433 6.6822 21.4454 8.4047 23.4062C10.1272 25.3671 12.2993 26.51 14.9209 26.835ZM17.5209 26.835C19.9043 26.5317 21.9301 25.5458 23.5984 23.8775C25.2668 22.2092 26.2526 20.1833 26.5559 17.8H17.5209V26.835ZM16.2209 29.5C14.4226 29.5 12.7326 29.1587 11.1509 28.4762C9.56928 27.7937 8.19345 26.8675 7.02345 25.6975C5.85345 24.5275 4.9272 23.1517 4.2447 21.57C3.5622 19.9883 3.22095 18.2983 3.22095 16.5C3.22095 14.7017 3.5622 13.0117 4.2447 11.43C4.9272 9.84833 5.85345 8.4725 7.02345 7.3025C8.19345 6.1325 9.56928 5.20625 11.1509 4.52375C12.7326 3.84125 14.4226 3.5 16.2209 3.5C18.0193 3.5 19.7039 3.84125 21.2747 4.52375C22.8455 5.20625 24.2214 6.13792 25.4022 7.31875C26.583 8.49958 27.5147 9.87542 28.1972 11.4462C28.8797 13.0171 29.2209 14.7017 29.2209 16.5C29.2209 18.2767 28.8797 19.9558 28.1972 21.5375C27.5147 23.1192 26.5884 24.5004 25.4184 25.6812C24.2484 26.8621 22.8726 27.7937 21.2909 28.4762C19.7093 29.1587 18.0193 29.5 16.2209 29.5Z" fill="#616161"/>
                      </svg>
                      <span className="rio-popover-ownership-text">50% Shell</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="rio-popover-close-button" onClick={onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RioPopOver;
