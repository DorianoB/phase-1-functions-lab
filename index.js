const head = 42;
const feet = 264
function distanceFromHqInBlocks(street){
return Math.abs(street - head);
}

function distanceFromHqInFeet(street){
return distanceFromHqInBlocks(street) * feet;
}

function distanceTravelledInFeet(start, destination){
return Math.abs(destination - start) * feet;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
      } else if (distance <= 2000) {
        return  ((distance - 400) * 2) / 100;
      } else if (distance <= 2500) {
        return 25;
      } else if (distance >= 2500) {
        return 'cannot travel that far';
      }
}
