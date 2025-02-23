import React, { useState } from "react";
import "./styles.css";

const FileInput = ({ id, accept, onFileSelected, text }) => {
  const [fileSelected, setFileSelected] = useState(false);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelected(e.target.files[0]);
      setFileSelected(true);
    }
  };

  return (
    <>
      <input
        type="file"
        accept={accept}
        id={id}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label htmlFor={id} className="custom-input-file-button">
        {!fileSelected ? text ?? "Upload a profile picture" : "File Selected"}
      </label>
    </>
  );
};

export default FileInput;
