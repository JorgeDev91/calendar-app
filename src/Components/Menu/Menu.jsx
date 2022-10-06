
import { useState } from 'react';
import avatar from '../../Images/image-jeremy.png'

import './Menu.css';

export const Menu = ({onNewCalendarSelection}) => {

  const calendarArry = ['daily', 'weekly', 'monthly'];
  let [selectedCalendar, setselectedCalendar] = useState('daily');

  const onHandleCalendar = (selection) => {
    setselectedCalendar( selectedCalendar = calendarArry[ selection ] );
    onNewCalendarSelection( selectedCalendar );
  }
 

  return (
    <>
        <div className="menuContainer">

            <div className="profileCard">
                <div className="borderImg">
                  <img src={avatar} alt="Avatar" className="profileImg" />
                </div>
                <h2 className="report">Report for</h2>
                <h2 className="nameLabel">Jeremy Robson</h2>
            </div>

            <ul className="menuBar">
              <li className='menuItem' onClick={ () => onHandleCalendar(0) }>Daily</li>
              <li className='menuItem' onClick={ () => onHandleCalendar(1) }>Weekly</li>
              <li className='menuItem' onClick={ () => onHandleCalendar(2) }>Monthly</li>
            </ul>

        </div>
    </>
  )
}
