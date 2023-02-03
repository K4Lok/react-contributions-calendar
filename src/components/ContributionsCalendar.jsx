import React, { useEffect, useState } from 'react'
import './ContributionsCalendar.css'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import DateCell from './DateCell'

export default function ContributionsCalendar({ width = "100%", height = "100%" }) {
  const DAYCHARS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  const MONTHS = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"]

  let date = new Date()
  let today, firstDayOfMonth, lastDayOfMonth, thisMonthDays

  const setDateValues = () => {
    today = date.getDay()
    firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    thisMonthDays = Array.from(Array(lastDayOfMonth).keys())
  }

  const [currentMonth, setCurrentMonth] = useState(date.getMonth())
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
  const [currentMonthDays, setcurrentMonthDays] = useState(Array.from(Array(lastDayOfMonth).keys()))

  setDateValues()

  useEffect(() => {
    date = new Date(currentYear, currentMonth, 1)
    setDateValues()
    console.log(currentMonthDays)
  }, [currentMonth])

  const toPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      return
    }
    
    setCurrentMonth(index => index - 1)
  }

  const toNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      return
    }
    
    setCurrentMonth(index => index + 1)
  }

  return (
    <div className='container'
      style={{ width: width, height: height }}
    >
      <div className="header">
        <p onClick={toPrevMonth} className='btn-month'><BiChevronLeft size={25} /></p>
        <p>{`${MONTHS[currentMonth]}, ${currentYear}`}</p>
        <p onClick={toNextMonth} className='btn-month'><BiChevronRight size={25} /></p>
      </div>
      <div className="rows">
        {DAYCHARS.map((c) => {
          return (
            <DateCell key={c}>{c}</DateCell>
          )
        })}
        {
          thisMonthDays.map((d) => {
            return (
              <DateCell key={d} name={true}>{d + 1}</DateCell>
            )
          })
        }
      </div>
    </div>
  )
}
