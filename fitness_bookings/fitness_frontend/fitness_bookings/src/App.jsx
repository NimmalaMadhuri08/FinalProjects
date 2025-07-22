import React from 'react';
import ClassList from './components/ClassList';
import BookClass from './components/BookClass';
import BookingList from './components/BookingList';

function App() {
  return (
    <div className="App">
      <h1>Fitness Class Booking</h1>
      <ClassList />
      <hr />
      <BookClass />
      <hr />
      <BookingList />
    </div>
  );
}

export default App;
