
import puntos from '../../Images/icon-ellipsis.svg';
import workBackground from '../../Images/icon-work.svg';
import playBackground from '../../Images/icon-play.svg';
import studyBackground from '../../Images/icon-study.svg';
import exerciseBackground from '../../Images/icon-exercise.svg';
import socialBackground from '../../Images/icon-social.svg';
import selfCareBackground from '../../Images/icon-self-care.svg';

import { getCardStyle } from '../../Helpers/getCardStyle';
import './Card.css';


export const Card = ({cardType}) => {
       
    const backgroundArry = [ workBackground, playBackground, studyBackground, exerciseBackground, socialBackground, selfCareBackground];

    const { selectedBackground, selectedColor, className, cardTitle } = getCardStyle({cardType, backgroundArry});

  return (
    <>
        
        <div className={ className } style = {{backgroundColor: selectedColor}} >
            <img className='backgroundIcon' src={selectedBackground} alt="background" />
            <div className="card">
                <h2 className='titleLabel'> { cardTitle } </h2>
                <img className='moreIcon' src={puntos} alt="puntos" />
                <h2 className='hoursLabel'>5hrs</h2>
                <h3 className='calendarLabel'>Last Week - 5hrs</h3>
            </div>
        </div>
       
    
    </>
  )
}
