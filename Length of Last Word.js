var lengthOfLastWord = function (s) {
    s = s.trimRight().split(" ");
    return s[s.length - 1].length
  };