const RemoveConsecutiveDuplicates = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i - 1] && str[i] != str[i - 2] && str[i] != str[i - 3]) {
      result += str[i];
    }
  }

  return result;
};

export default RemoveConsecutiveDuplicates;
