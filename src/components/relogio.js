import React, { useState, useEffect } from 'react';
import './CSS/relogio.css'

function Relogio() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }, []);
  
    function tick() {
      setDate(new Date());
    }
  
    const day = date.getDate();
    const month = date.getMonth() + 1; // Os meses começam de 0
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return(
        <div className="qualdardo">
          <p>{day < 10 ? '0' : ''}{day}/{month < 10 ? '0' : ''}{month}/{year} - {hour < 10 ? '0' : ''}{hour}:{minute < 10 ? '0' : ''}{minute}:{second < 10 ? '0' : ''}{second}</p>
        </div>
    );
}

export default Relogio;