function getTheMostRepeatedChar(arr) {
  let maxRepetition = 0;
  let charRepetitions = {};

  if (arr.length === 0) return;

  for (const char of arr) {
    charRepetitions = charRepetitions.hasOwnProperty(char)
      ? { ...charRepetitions, [char]: charRepetitions[char] + 1 }
      : { ...charRepetitions, [char]: 1 };

    maxRepetition =
      charRepetitions[char] > maxRepetition
        ? charRepetitions[char]
        : maxRepetition;
  }

  const charRepetitionsArray = Object.entries(charRepetitions);

  const mostRepeatedChar = charRepetitionsArray.find(
    (item) => item[1] === maxRepetition && item[0]
  );

  return mostRepeatedChar[0];
}

console.log(
  'El elemento que mas se repite de ["a", "b", "c", "a", "a", "a", "b", "c", "c", "c"] es',
  getTheMostRepeatedChar(["a", "b", "c", "a", "a", "a", "b", "c", "c", "c"])
);

console.log(
  'El elemento que mas se repite de ["a", "b", "c", "a", "a", "b", "c", "c", "c"] es',
  getTheMostRepeatedChar(["a", "b", "c", "a", "a", "b", "c", "c", "c"])
);

console.log(
  'El elemento que mas se repite de ["a", "b", "c"] es',
  getTheMostRepeatedChar([])
);
