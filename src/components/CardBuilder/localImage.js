import React, { createRef } from "react";

const localImage = ({ setLocalImage }) => {
  const hiddenFileInput = createRef();

  const onImageChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setLocalImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          hiddenFileInput.current.click();
        }}
      >Add Logo</button>
      <input
        type="file"
        style={{ display: "none" }}
        id="file-input"
        accept=".jpg,.jpeg,.png"
        ref={hiddenFileInput}
        onChange={(e) => onImageChange(e)}
      />
    </div>
  );
};

export default localImage;
