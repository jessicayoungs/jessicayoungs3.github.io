const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was a very hot day, about 94 fahrenheit, so :insertx: decided to go to the pool. But first, they had to stop by the :inserty:. When they got there, they got in a fist fight with :insertz:. Bob the gorilla was able to stop the fight because they weigh 300 pounds.'; 
let insertX = ['Lady Gaga', 'Guy Fieri', 'Mila Kunis'];
let insertY = ['hair salon', 'laundromat', 'post office'];
let insertZ = ['a grizzly bear', 'a 5 year old girl', 'Barack Obama'];
randomize.addEventListener('click', result);
function result() {
  let newStory = storyText;

let xItem, yItem, zItem;
xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob', name)+ '';
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14) + ' stone';
      const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
      newStory = newStory.replace("94 fahrenheit", temperature);  
      newStory = newStory.replace("300 pounds", weight); 
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
