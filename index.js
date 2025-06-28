const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
  // return tutorials

//using map() to generate a new array
//loop through the tutorials array using map() to create a new array
//for each tutorial string, split it into individual words
//capitalize the first letter of each word
//join the capitalized words back into a string
//return the new array

const titleCased = () => {
  return tutorials.map(tutorial => { //tutorials.map()creates a new array with transformed tutorial titles
    return tutorial
    .split(' ') //tutorial.split(' ')splits each title into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //word.charAt(0).toUpperCase()...capitalizes the first letter
    .join(' ') //.join(' ')joins the capitalized words back into a full string
  });
};
console.log(titleCased());  /* [
  'What Does The This Keyword Mean?',
  'What Is The Constructor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
]*/