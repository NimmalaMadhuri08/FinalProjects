import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/classes/?timezone=Asia/Kolkata')
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls.id}>
            <strong>{cls.name}</strong> with {cls.instructor} on {new Date(cls.datetime).toLocaleString()} — Slots: {cls.slots}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
