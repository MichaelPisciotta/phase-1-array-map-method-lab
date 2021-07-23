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






const titleCased = () => { 
  return tutorials.map( string => {
    let newArray = string.split(" ");
    const capitalArray = newArray.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1); //slice(1) takes the rest of word after first letter
    }) 
    return capitalArray.join(" ") //reversing split(), making back into string 
    });
}
