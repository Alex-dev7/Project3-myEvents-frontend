import { useState, useEffect } from "react"

const Timer = ({date}) => {
 
    // converting dateTime props to milliseconds 
    const countDownDate = new Date(date).getTime()

    const [countDown, setCountDown] = useState(
        // getting the time difference
        countDownDate - new Date().getTime()
      )

    //   console.log(countDown)

      useEffect(() => {
        // the setInterval browser method, will update the countDownDate variable with the current time subtracted from the new date, every second/(1000 milliseconds)
        const interval = setInterval(() => {
          setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        //  stop the execution of a setInterval(), release the resources when the component unmounts to have better performance and less memory usage
        return () => clearInterval(interval)
        
    }, [countDownDate])


    let days = null; 
    let hours = null; 
    let minutes = null; 
    let seconds = null; 


    const convertValues = (countDown) => {
        // converting milliseconds to days, hours, minutes, and seconds
        days = Math.floor(countDown / (1000 * 60 * 60 * 24))
        hours = Math.floor( (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
        seconds = Math.floor((countDown % (1000 * 60)) / 1000)
      };
      convertValues(countDown)

// "end of the timer " component that will be displayed when the timer expires
    const endTimer = <span style={{ color: "green"}}>Starts Now!</span>
            
    return (
        <div>
         {countDown > 0 ? <span style={{ color: "blue"}}>{days} d {hours}:{minutes}:{seconds}</span> : endTimer}
        </div>
    )
}

export default Timer
