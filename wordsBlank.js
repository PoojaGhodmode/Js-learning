const wordsBlank = (myNoun, myAdjective, myVerb, myAdverb) => {
  let result = `The ${myNoun} is not ${myAdjective} but like to ${myVerb} ${myAdverb}.`;
  return result;
};

console.log('Words Blank game');
console.log(wordsBlank("tennis", "recent", "forgive", "seriously"));
//The tennis is not recent but like to forgive seriously.
