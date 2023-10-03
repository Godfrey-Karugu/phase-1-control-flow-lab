function scuberGreetingForFeet(ride){
  // let ride;
  let greetings;
  if (ride <= 400){
    greetings ='This one is on me!';
  }else if(ride > 2000){
    greetings = 'I will gladly take your thirty bucks.';
  }else if(ride >2500){
    greetings = 'No can do.';
  }
}

function ternaryCheckCity(city){

  city ==='NYC'? "Ok, sounds good.": "No go."
  
}

function switchOnCharmFromTip(tip){
  switch('tip'){
    case 'genereous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you. ";
      break;
    default:
      return 'Bye.'
      break;
  }
}