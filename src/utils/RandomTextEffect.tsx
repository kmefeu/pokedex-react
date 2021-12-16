import React, { useEffect, useState } from "react";

interface randomTextEffectProps {
  messages: string[];
}

const RandomTextEffect: React.FC<randomTextEffectProps> = ({
  messages,
}: randomTextEffectProps) => {
  // setup variables for the effect if you change this values you will change the effect behavior
  const randomCharacters = "&#*+%?£@§$";
  const message = messages[0]; // I have not implemented multiple messages yet
  const outLoopMaxCycles = 25;
  const inLoopSpeed = 25;
  const outLoopSpeed = 50;

  // support variables used hold important values for the effect script
  const randomCharactersLength = randomCharacters.length;
  const messageLength = message.length;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(2);
  const [outLoopCount, setOutLoopCount] = useState(0);
  const [randomScoreFlag, setRandomScoreFlag] = useState(false);

  // array of numbers that maker our lives easier
  const [randomScore, setRandomScore] = useState<number[]>([]);

  // returns a random character from the randomCharacters string set
  const generateRandomCharacter = () =>
    randomCharacters.charAt(Math.floor(Math.random() * randomCharactersLength));

  // returns a random number between 0 and the value at outLoopMaxCycles
  const generateRandomNumber = () =>
    Math.floor(Math.random() * (outLoopMaxCycles - 1) + 1);

  // returns a random string base on randomCharacters string and actual text length
  const generateRandomText = () => {
    var randomText = "";

    for (let i = 0; i < textLength; i++) {
      randomText += generateRandomCharacter();
    }

    return randomText;
  };

  // returns an array with random numbers between 0 and the value at outLoopMaxCycles
  const generateRandomScore = () => {
    setRandomScoreFlag(true);
    let scoreList = [];

    for (let i = 0; i < messageLength; i++) {
      scoreList.push(generateRandomNumber());
    }

    setRandomScore(scoreList);
  };

  // responsible for the entry effect
  const InLoop = () => {
    let randomText = generateRandomText();
    setTextLength((s) => s + 2);
    setText(randomText);
  };

  // responsible for the exit(decoding) effect
  const OutLoop = () => {
    var textScore = randomScore;
    var textDecrypting = "";

    for (let i = 0; i < messageLength; i++) {
      textScore[i] = textScore[i] - 1;

      // if number is above 0  add a random character
      if (textScore[i] > 0) {
        textDecrypting += generateRandomCharacter();
      }

      // if number is under or equal to 0 add the actual character
      if (textScore[i] <= 0) {
        textDecrypting += message.charAt(i);
      }
    }

    setText(() => textDecrypting);
    setRandomScore(() => textScore);
    setOutLoopCount((s) => s++);
  };

  // useEffect to handle  the animations steps
  useEffect(() => {
    if (textLength < messageLength) {
      setTimeout(InLoop, inLoopSpeed);
    } else if (outLoopCount < outLoopMaxCycles) {
      setTimeout(OutLoop, outLoopSpeed);
    }
    if (!randomScoreFlag) generateRandomScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <>{text}</>;
};

export default RandomTextEffect;
