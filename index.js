// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks-42); 
  };
  
  function distanceFromHqInFeet(feet){
    return (Math.abs(feet-42)*264);
  };
  
  function distanceTravelledInFeet(dist1,dist2){
    return (Math.abs(dist2-dist1)*264)
  
  };
  
  function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start,destination) < 400){
      return 0;
    } else if(distanceTravelledInFeet(start,destination) >= 400 && distanceTravelledInFeet(start,destination) <= 2000){
      return ((distanceTravelledInFeet(start,destination) - 400)*0.02);
    } else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
      return 25;
    } else if(distanceTravelledInFeet(start,destination) > 2500){
      return "cannot travel that far";
    }
  };