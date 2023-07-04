import React, { useState, useEffect } from "react";

const Settings = () => {
  return (
    <div className="settings">
      <div className="dark-light">
        <button>Toggle Dark Mode</button>
      </div>
      <div className="color-choices">
        <select name="colors" id="">
          <option value="">blue palette</option>
          <option value="">orange palette</option>
        </select>
        <button>Select Colour Scheme</button>
      </div>
    </div>
  );
};

export default Settings;
