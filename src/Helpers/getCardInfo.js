
import data from '../data.json';


export const getCardInfo = ( {cardTitle, calendarChoosed} ) => {
   
    let currentValue = 0;
    let previousValue = 0;

     data.filter( (element) => {
        if(element.title === cardTitle ) {
            
            if ( calendarChoosed === 'daily') { 
                currentValue = element.timeframes.daily.current; 
                previousValue = element.timeframes.daily.previous;
            }

            if ( calendarChoosed === 'weekly'){
                currentValue = element.timeframes.weekly.current; 
                previousValue = element.timeframes.weekly.previous;
            }

            if ( calendarChoosed === 'monthly'){
                currentValue = element.timeframes.monthly.current; 
                previousValue = element.timeframes.monthly.previous;
            }
        }
        
        return 0;
    });

    return {currentValue, previousValue};
}