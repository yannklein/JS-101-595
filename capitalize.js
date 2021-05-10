const firstName = "mAcHiKo";

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainingLetters = word.substring(1).toLowerCase();
  return `${firstLetter}${remainingLetters}`;
};

console.log(capitalize(firstName));
console.log(firstName);
