import { useCallback } from "react";
import styles from "./ImageUploader.module.css";

const VideoUploader = ({ onFileSelect }) => {
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        onFileSelect(e.dataTransfer.items[0].getAsFile());
        e.dataTransfer.clearData();
      }
    },
    [onFileSelect]
  );

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={styles.dropzone}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileElem"
        name="file"
        hidden
        onChange={handleFileChange}
        accept="video/mp4"
      />
      <label htmlFor="fileElem">
        Drag a video here or <span>upload</span> to browse.
      </label>
    </div>
  );
};

export default VideoUploader;
