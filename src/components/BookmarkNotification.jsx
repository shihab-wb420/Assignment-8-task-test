import React from 'react';

const BookmarkNotification = ({ blogTitle, onClose }) => {
  return (
    <div style={{ marginTop:"1em", border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p>Bookmark added for "{blogTitle}"</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BookmarkNotification;