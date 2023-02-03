import React, { useEffect, useState, useReducer } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import './ContributionsCalendar.css'
import { dateReducer, INIT_STATE, ACTION } from '../reducers/dateReducer'
import DateCell from './DateCell'

export default function ContributionsCalendar({ width = "100%", height = "100%" }) {
  const DAYCHARS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  const MONTHS = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"]

  const todayDate = new Date()
  const today = todayDate.getDate()

  const [state, dispatch] = useReducer(dateReducer, INIT_STATE)

  useEffect(() => {
    dispatch({
      type: ACTION.INITIALIZE_DATES,
    })
  }, [])

  const handlePrevMonth = () => {
    dispatch({
      type: ACTION.PREV_MONTH,
      payload: {
        date: state.date
      }
    })
  }

  const handleNextMonth = () => {
    dispatch({
      type: ACTION.NEXT_MONTH,
      payload: {
        date: state.date
      }
    })
  }

  return (
    <div className='container'
      style={{ width: width, height: height }}
    >
      <div className="header">
        <p className='btn-month' onClick={handlePrevMonth} ><BiChevronLeft size={25} /></p>
        <p>{`${MONTHS[state.currentMonth]}, ${state.currentYear}`}</p>
        <p className='btn-month' onClick={handleNextMonth}><BiChevronRight size={25} /></p>
      </div>
      <div className="rows">
        {DAYCHARS.map((c) => {
          return (
            <DateCell key={c}>{c}</DateCell>
          )
        })}
        {
          Array.from(new Array(state.totalDays).keys()).map((d) => {
            return (
              <DateCell key={d} name={true}>{d + 1}</DateCell>
            )
          })
        }
      </div>
    </div>
  )
}
