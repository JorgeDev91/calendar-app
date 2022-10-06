import React, { useState } from 'react'
import { Card } from './Components/Card/Card'
import { Menu } from './Components/Menu/Menu'

export const CalendarApp = () => {

  let [calendarSelection, setcalendarSelection] = useState('daily');

  const onHandleCalendar = (calendar) => {
    setcalendarSelection (calendarSelection = calendar);
  }
 

  return (
    <>
     
        <div className="gridContainer">
          <Menu onNewCalendarSelection= { (calendar) => onHandleCalendar(calendar) }/>
          <Card cardType={"work"} calendarChoosed={ calendarSelection } />
          <Card cardType={"play"} calendarChoosed={ calendarSelection } />
          <Card cardType={"study"} calendarChoosed={ calendarSelection }/>
          <Card cardType={"exercise"} calendarChoosed={ calendarSelection }/>
          <Card cardType={"social"} calendarChoosed={ calendarSelection }/>
          <Card cardType={"selfCare"} calendarChoosed={ calendarSelection }/>
          
        </div>
      
    </>
  )
}
