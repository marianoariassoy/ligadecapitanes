import { useState, useEffect } from 'react'

const Counter2 = () => {
  const targetDate = new Date('March 8, 2025 09:00:00 GMT-03:00').getTime()
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  function calculateTimeRemaining() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }
  return (
    <div className='grid grid-flow-col text-center auto-cols-max text-sm'>
      <div className='flex flex-col p-2 text-primary'>
        <span className='countdown font-medium text-3xl'>
          <span style={{ '--value': timeRemaining.days }}></span>
        </span>
        días
      </div>
      <div className='flex flex-col p-2 text-primary'>
        <span className='countdown font-medium text-3xl'>
          <span style={{ '--value': timeRemaining.hours }}></span>
        </span>
        horas
      </div>
      <div className='flex flex-col p-2 text-primary'>
        <span className='countdown font-medium text-3xl'>
          <span style={{ '--value': timeRemaining.minutes }}></span>
        </span>
        min.
      </div>
      <div className='flex flex-col p-2 text-primary'>
        <span className='countdown font-medium text-3xl'>
          <span style={{ '--value': timeRemaining.seconds }}></span>
        </span>
        seg.
      </div>
    </div>
  )
}

export default Counter2
