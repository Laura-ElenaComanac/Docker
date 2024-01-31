import React from "react";
import backgroundImage from '/app1/src/assets/projects.jpg';

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <h2>App 1</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
}

export default App;
