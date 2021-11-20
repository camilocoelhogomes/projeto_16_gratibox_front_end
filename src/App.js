import React from 'react';
import GlobalStyle from './assets/style/GlobalStyle';
import RoutesConfig from './routes/RoutesConfig';
// eslint-disable-next-line func-names
const App = function () {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesConfig />
    </div>
  );
};

export default App;
