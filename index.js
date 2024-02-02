const findLongestWord = (words) => {
  let longestWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

const sumUniqueNumbers = (arr) => {
  if (Array.isArray(arr) === false) {
    return 0;
  }
  return arr.filter((el, i) => arr.indexOf(el) === i).reduce((acc, el) => acc + el);
};

const mergeArrays = (...arrs) => {
  if (Array.isArray(arrs) === false) {
    return [];
  }
  const mergedArr = [].concat(...arrs);
  return mergedArr.filter((el, i) => mergedArr.indexOf(el) === i);
};

const hasProperty = (obj, propName) => Object.hasOwn(obj ?? {}, propName);

const getPropertyValue = (obj, propName) => obj?.[propName];

const invertObject = (obj) => {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
};

export {
  findLongestWord, sumUniqueNumbers, mergeArrays, hasProperty, getPropertyValue, invertObject,
};
