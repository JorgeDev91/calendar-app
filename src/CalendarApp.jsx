import React from 'react'
import { Card } from './Components/Card/Card'

export const CalendarApp = () => {

  return (
    <>
     
        <div className="gridContainer">
          
          <Card cardType={"work"} />
          <Card cardType={"play"} />
          <Card cardType={"study"} />
          <Card cardType={"exercise"} />
          <Card cardType={"social"} />
          <Card cardType={"selfCare"} />
          
        </div>
      
    </>
  )
}
