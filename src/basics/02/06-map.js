function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {
  return str.split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(tidyUpString).map(capitalise); // You are allowed to edit this line

console.log(mentorsTidy); // Expected result: ["Daniel", "Irina", "Gordon", "Ashleigh"]
