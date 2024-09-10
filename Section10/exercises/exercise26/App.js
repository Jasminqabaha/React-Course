import Page from './Page';
import ThemeContextProvider from "./ThemeContextProvider.js";
import React from 'react';
function App() {
  return (
  <ThemeContextProvider>
  <Page />
  </ThemeContextProvider>
  );
}

export default App;
