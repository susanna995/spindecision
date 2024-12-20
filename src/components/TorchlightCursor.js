
import React, { useEffect } from 'react';
import './TorchlightCursor.css'; // Import the styles

const TorchlightCursor = () => {
  useEffect(() => {
    // Handle mouse move to update both cursors' positions
    const handleMouseMove = (e) => {
      const mainCursor = document.querySelector('.main-cursor');
      const torchlightCursor = document.querySelector('.torchlight-cursor');

      if (!mainCursor || !torchlightCursor) return;

      // Update the position of the main cursor (small one)
      mainCursor.style.left = `${e.pageX - mainCursor.offsetWidth / 2}px`;
      mainCursor.style.top = `${e.pageY - mainCursor.offsetHeight / 2}px`;

      // Update the position of the torchlight cursor (follows the main cursor)
      torchlightCursor.style.left = `${e.pageX - torchlightCursor.offsetWidth / 2}px`;
      torchlightCursor.style.top = `${e.pageY - torchlightCursor.offsetHeight / 2}px`;
    };

    // Add event listener for mousemove
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener when component is unmounted
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array ensures this only runs once when the component mounts

  return (
    <>
      {/* Main Cursor (Small Cursor) */}
      <div className="main-cursor"></div>

      {/* Glowing Torchlight Cursor (Follows the Main Cursor) */}
      <div className="torchlight-cursor"></div>
    </>
  );
};

export default TorchlightCursor;
