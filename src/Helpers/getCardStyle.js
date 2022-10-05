
import data from '../data.json';

 export const getCardStyle = ({cardType, backgroundArry}) => {

    const workColor = "hsl(15, 100%, 70%)";
    const playColor = "hsl(195, 74%, 62%)";
    const studyColor = "hsl(348, 100%, 68%)";
    const exerciseColor = "hsl(145, 58%, 55%)";
    const socialColor = "hsl(264, 64%, 52%)";
    const selfCareColor = "hsl(43, 84%, 65%)";

    const backgroundColorArry = [ workColor, playColor, studyColor, exerciseColor, socialColor, selfCareColor];  

    const typeCardArry= ["work", "play", "study", "exercise", "social", "selfCare"];
    
    let selectedCardPosition = 0;
    let selectedBackground = null;
    let selectedColor = workColor;
    let cardTitle = "work";

    const className = cardType + "Card"  + " cardBackground"; 

    typeCardArry.find( (element,index) =>{ 
        if ( element == cardType){
            selectedCardPosition = index;
        }
    });

    selectedBackground = backgroundArry[ selectedCardPosition ];
    selectedColor = backgroundColorArry[ selectedCardPosition ];
    cardTitle = data[ selectedCardPosition ].title;
    
    return { selectedBackground, selectedColor, className, cardTitle};



}