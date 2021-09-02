import React, { useCallback, useEffect, useState } from "react";

interface randomTextEffectProps {
  messages: string[];
}

const RandomTextEffect: React.FC<randomTextEffectProps> = ({
  messages,
}: randomTextEffectProps) => {
  const randomCharacters = "&#*+%?£@§$";
  const randomCharactersLength = randomCharacters.length;
  const message = messages[0];
  const messageLength = message.length;
  const outLoopMaxCycles = 50;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(2);
  const [outLoopCount, setOutLoopCount] = useState(0);
  const [randomScore, setRandomScore] = useState<number[]>([]);
  const [randomScoreFlag, setRandomScoreFlag] = useState(false);

  const generateRandomCharacter = useCallback(
    () =>
      randomCharacters.charAt(
        Math.floor(Math.random() * randomCharactersLength)
      ),
    [randomCharactersLength]
  );

  const generateRandomNumber = useCallback(
    () => Math.floor(Math.random() * 49 + 1),
    []
  );

  const generateRandomText = useCallback(() => {
    var randomText = "";
    for (let i = 0; i < textLength; i++) {
      randomText += generateRandomCharacter();
    }
    return randomText;
  }, [generateRandomCharacter, textLength]);

  const generateRandomScore = useCallback(() => {
    setRandomScoreFlag(() => true);
    var scoreList = [];
    for (let i = 0; i < messageLength; i++) {
      scoreList.push(generateRandomNumber());
    }
    setRandomScore(scoreList);
  }, [generateRandomNumber, messageLength]);

  const InLoop = useCallback(() => {
    let randomText = generateRandomText();
    setTextLength((s) => s + 2);
    setText(randomText);
  }, [generateRandomText]);

  const OutLoop = useCallback(() => {
    var textScore = randomScore;
    var textDecrypting = "";
    for (let i = 0; i < messageLength; i++) {
      textScore[i] = textScore[i] - 1;
      if (textScore[i] > 0) {
        textDecrypting += generateRandomCharacter();
      }
      if (textScore[i] <= 0) {
        textDecrypting += message.charAt(i);
      }
    }
    setText(() => textDecrypting);
    setRandomScore(() => textScore);
    setOutLoopCount((s) => s++);
  }, [generateRandomCharacter, message, messageLength, randomScore]);

  useEffect(() => {
    if (textLength < messageLength) {
      setTimeout(InLoop, 100);
    } else if (outLoopCount < outLoopMaxCycles) {
      setTimeout(OutLoop, 600);
    }
    if (!randomScoreFlag) generateRandomScore();
  }, [
    InLoop,
    OutLoop,
    outLoopCount,
    messageLength,
    text,
    textLength,
    randomScoreFlag,
    generateRandomScore,
  ]);

  return <>{text}</>;
};

export default RandomTextEffect;
