
import puntos from '../../Images/icon-ellipsis.svg';

import workBackground from '../../Images/icon-work.svg';
import playBackground from '../../Images/icon-play.svg';
import studyBackground from '../../Images/icon-study.svg';
import exerciseBackground from '../../Images/icon-exercise.svg';
import socialBackground from '../../Images/icon-social.svg';
import selfCareBackground from '../../Images/icon-self-care.svg';

import './Card.css';


export const Card = ({cardType}) => {
    
    const workColor = "hsl(15, 100%, 70%)";
    const playColor = "hsl(195, 74%, 62%)";
    const studyColor = "hsl(348, 100%, 68%)";
    const exerciseColor = "hsl(145, 58%, 55%)";
    const socialColor = "hsl(264, 64%, 52%)";
    const selfCareColor = "hsl(43, 84%, 65%)";
    
    const backgroundArry = [ workBackground, playBackground, studyBackground, exerciseBackground, socialBackground, selfCareBackground];
    const backgroundColorArry = [ workColor, playColor, studyColor, exerciseColor, socialColor, selfCareColor];  

    const typeCardArry= ["work", "play", "study", "exercise", "social", "selfCare"];
    
    let backgroundPosition = 0;
    let selectedBackground = workBackground;
    let selectedColor = workColor;

    const className = cardType + "Card"  + " cardBackground"; 

    typeCardArry.find( (element,index) =>{ 
        if ( element == cardType){
            backgroundPosition = index;
        }
    });

    selectedBackground = backgroundArry[ backgroundPosition ];
    selectedColor = backgroundColorArry[ backgroundPosition ];

  return (
    <>
        
        <div className={ className } style = {{backgroundColor: selectedColor}} >
            <img className='backgroundIcon' src={selectedBackground} alt="background" />
            <div className="card">
                <h2 className='titleLabel'> { cardType } </h2>
                <img className='moreIcon' src={puntos} alt="puntos" />
                <h2 className='hoursLabel'></h2>
                <h3 className='calendarLabel'></h3>
            </div>
        </div>
       
    
    </>
  )
}
