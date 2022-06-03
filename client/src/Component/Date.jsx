import React, { useState, useEffect } from "react"
export const DateTime = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => {
            clearInterval(timer)
        }
    });
    return (
      <div>
        <p>{date.toLocaleDateString()}</p>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );


}
export default DateTime