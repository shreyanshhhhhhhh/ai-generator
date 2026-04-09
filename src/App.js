import React, { useState } from "react";
import Cropper from "react-easy-crop";
import "./App.css";

export default function App() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [settings, setSettings] = useState({
    background: "gaming",
    lighting: "soft",
    text: "Next Gen Performance",
  });

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <h1>🚀 AI Ad Generator</h1>

      <div className="container">
        {/* LEFT PANEL */}
        <div className="panel">
          <h3>Upload Product</h3>
          <input type="file" onChange={onFileChange} />

          <h3>Customization</h3>

          <label>Background</label>
          <select name="background" onChange={handleChange}>
            <option>gaming</option>
            <option>office</option>
            <option>minimal</option>
          </select>

          <label>Lighting</label>
          <select name="lighting" onChange={handleChange}>
            <option>soft</option>
            <option>bright</option>
          </select>

          <label>Ad Text</label>
          <input
            type="text"
            name="text"
            placeholder="Enter tagline"
            onChange={handleChange}
          />

          <button className="generate">Generate Ad</button>
        </div>

        {/* RIGHT PANEL */}
        <div className="preview">
          {image && (
            <div className="crop-container">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
              />
            </div>
          )}

          {!image && <p>Preview will appear here</p>}
        </div>
      </div>
    </div>
  );
}