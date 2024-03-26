import { useEffect, useState } from "react";
import Input from "./components/Input";
import Meter from "./components/Meter";
import {
  lowerCaseLetters,
  upperCaseLetters,
  numbers,
  specialChars
} from "./config";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState(0);
  // useEffect(() => {
  //   console.log("total for", val, ": ", checkStrength(val));
  // }, [val]);

  const checkStrength = (val) => {
    let totalScore = 0;
    let smallCaseWt = 1;
    let capitalWt = 3;
    let numberWt = 5;
    let specialCharWt = 8;
    let smallCaseCount = 0;
    let capitalCount = 0;
    let numberCount = 0;
    let specialCharCount = 0;
    // console.log("");
    let valArr = val.split("") || [];
    valArr.forEach((char, index) => {
      let typeOfChar = "smallCase";
      if (lowerCaseLetters[char]) {
        typeOfChar = "smallCase";
        totalScore += smallCaseWt;
        smallCaseCount = smallCaseCount + 1;
      }
      if (upperCaseLetters[char]) {
        typeOfChar = "capitalCase";
        totalScore = totalScore + capitalWt;
        capitalCount = capitalCount + 1;
      }
      if (numbers[char]) {
        typeOfChar = "number";
        totalScore = totalScore + numberWt;
        numberCount = numberCount + 1;
      }
      if (specialChars[char]) {
        typeOfChar = "specialChar";
        totalScore = totalScore + specialCharWt;
        specialCharCount = specialCharCount + 1;
      }

      if (index !== 0) {
        switch (typeOfChar) {
          case "smallCase":
            if (!lowerCaseLetters[valArr[index - 1]])
              totalScore = totalScore + 2;
            break;

          case "capitalCase":
            if (!upperCaseLetters[valArr[index - 1]])
              totalScore = totalScore + 2;
            break;

          case "number":
            if (!numbers[valArr[index - 1]]) totalScore = totalScore + 2;
            break;

          case "specialChar":
            if (!specialChars[valArr[index - 1]]) totalScore = totalScore + 2;
            break;

          default:
        }
      }
    });
    let lengthWt = valArr.length * 5;
    // 20
    // 10 - samll
    // 5 - caps
    // 5 - char
    // (20 / 10 * 1) + (20 / 5 * 3) + (20 / 5 + 8)
    // 46
    // =====
    // 10 - small
    // 10 - char
    // (20 / 10 * 1) + (20 / 10 * 8)
    // 18
    // 10 - small
    // 10 - capital
    // (20 / 10 * 1) + (20 / 10 * 3)
    // 8
    let capitalRepeatWt =
      capitalCount === 0 ? 0 : (valArr.length / capitalCount) * 3;
    let smallRepeatWt =
      smallCaseCount === 0 ? 0 : (valArr.length / smallCaseCount) * 1;
    let numberRepeatWt =
      numberCount === 0 ? 0 : (valArr.length / numberCount) * 5;
    let specialCharRepeatWt =
      specialCharCount === 0 ? 0 : (valArr.length / specialCharCount) * 8;
    let repeatwt =
      smallRepeatWt + capitalRepeatWt + numberRepeatWt + specialCharRepeatWt;
    // valArr.length / smallCaseCount +
    // (valArr.length / capitalCount) * 3 +
    // (valArr.length / numberCount) * 5 +
    // (valArr.length / specialCharCount) * 8;

    console.log({
      repeatwt,
      smallCaseCount,
      capitalCount,
      numberCount,
      specialCharCount
    });

    totalScore = totalScore + lengthWt + repeatwt;
    // * valArr.length;
    setScore(totalScore);
    console.log("total for", val, ": ", totalScore);
    // return totalScore;
  };

  return (
    <div className="App">
      <h2>Check your password strength quickyly!</h2>
      <div className="scale__descriptions">
        <p>0 - 100 ==> Poor</p>
        <p>100 - 200 ==> Moderate</p>
        <p>200+ ==> Strong</p>
      </div>

      <Input checkStrength={checkStrength} />
      <Meter score={score} />
    </div>
  );
}
