import React from 'react';

/*** Custom Component ***/ 
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import ThemeContextProvider from './Context/ThemeContext';
import AuthContextProvider from './Context/AuthContext';
import ThemeToggle from './Components/ThemeToggle';
import BookContextprovider from './Context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextprovider>
          <BookList />
          </BookContextprovider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
