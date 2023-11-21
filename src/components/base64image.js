import React from 'react'

function Base64Images({src, type, name, classes}) {
    const blob = new Blob([new Uint8Array(src)], { type: type });
  
  // Create an object URL for the blob object
  const blobUrl = URL.createObjectURL(blob);
  return (
    <img
    src={blobUrl}
    alt={name}
    className={classes}
  />
  )
}

export default Base64Images