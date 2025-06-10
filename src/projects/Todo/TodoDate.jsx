import { useState,useEffect } from "react"
export const TodoDate = () =>{
    const [dateTime, setDateTime] = useState("")

      useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                const formatDate = now.toLocaleDateString();
                const formatTime = now.toLocaleTimeString();
                setDateTime(`${formatDate} - ${formatTime}`)
            }, 1000)
            
            return () => clearInterval(interval);
        }, [])
    return (<h1 className="date-time">{dateTime}</h1>)
}