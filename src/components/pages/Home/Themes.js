import React from 'react';

export default function Themes({ changeTheme }) {
  return (
    <div className="theme-wrap">
      <h3>Map Theme Options</h3>
      <button
        className="theme-btn"
        id="ckebr24rw1fs91an1h6e52vij"
        onClick={changeTheme}
      >
        Minimo Map
      </button>
      <button
        id="ckebqwnel1ifg19lg8lkmn29s"
        className="theme-btn"
        onClick={changeTheme}
      >
        Terrain Map
      </button>
      <button
        id="ckebpt7fe1hfn19p7roqubcev"
        className="theme-btn"
        onClick={changeTheme}
      >
        Satellite
      </button>
    </div>
  );
}