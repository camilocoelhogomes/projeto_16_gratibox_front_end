import React, { useState } from 'react';
import GlobalStyle from './assets/style/GlobalStyle';
import RoutesConfig from './routes/RoutesConfig';
import UserContext from './Context/UserContext';

const App = function () {
  const [userSign, setUserSign] = useState();
  const [userData, setUserData] = useState();

  const updateUserSign = ({ input, value }) => {
    const newUserSign = { ...userSign };
    newUserSign[input] = value;
    setUserSign(newUserSign);
  };

  return (
    <UserContext.Provider value={{
      userSign, updateUserSign, userData, setUserData,
    }}
    >
      <GlobalStyle />
      <RoutesConfig />
    </UserContext.Provider>
  );
};

export default App;
