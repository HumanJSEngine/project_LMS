export const switchGrade = grade => {
  let answer;

  switch (grade) {
    case "A+":
      answer = 1;
      break;
    case "A0":
      answer = 2;
      break;
    case "A-":
      answer = 3;
      break;
    case "B+":
      answer = 4;
      break;
    case "B0":
      answer = 5;
      break;
    case "B-":
      answer = 6;
      break;
    case "C+":
      answer = 7;
      break;
    case "C0":
      answer = 8;
      break;
    case "C-":
      answer = 9;
      break;
    case "D+":
      answer = 10;
      break;
    case "D0":
      answer = 11;
      break;
    case "D-":
      answer = 12;
      break;
    case "F":
      answer = 13;
      break;
    case "미평가":
      answer = 0;
      break;
  }
  return answer;
};
