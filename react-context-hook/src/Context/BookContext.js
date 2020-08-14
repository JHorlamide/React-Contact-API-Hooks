import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextprovider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Name Of The Wind", id: uuid() },
    { title: "The Ways Of The Kings", id: uuid() },
    { title: "The Final Empire", id: uuid() },
    { title: "The Hero Of The Ages", id: uuid() },
  ]);

  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextprovider;
