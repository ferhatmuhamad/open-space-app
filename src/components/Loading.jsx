import React from 'react';

// 49, import loadingBar
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      {/* @TODO: use react-redux-loading-bar to show loading bar */}

      {/* 50. Tambahkan Loading Bar */}
      <LoadingBar />
      {/* DONE! */}
    </div>
  );
}

export default Loading;
