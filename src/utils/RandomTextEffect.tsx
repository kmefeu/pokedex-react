import React, { useEffect, useState } from "react";

interface randomTextEffectProps {
  messages: [string];
}

interface fadeBufferProps {
  c: number;
  l: string;
}

const RandomTextEffect: React.FC<randomTextEffectProps> = ({
  messages,
}: randomTextEffectProps) => {
  const randomCharacters = "&#*+%?£@§$";
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);

  const [decryptingText, setDecryptingText] = useState("");
  const [randomText, setRandomText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [fadeBuffer, setFadeBuffer] = useState<fadeBufferProps[]>([]);
  const [fadeBufferBoolean, setFadeBufferBoolean] = useState(false);
  const [fader, setFader] = useState<fadeBufferProps>();
  const [doCycles, setDoCycles] = useState(false);

  useEffect(() => {
    setTimeout(animateIn, 100);
  }, []);

  const generateRandomText = () => {
    setRandomText(() => "");

    while (randomText.length < length) {
      setRandomText(
        (s) =>
          s +
          randomCharacters.charAt(
            Math.floor(Math.random() * randomCharacters.length)
          )
      );
    }
  };

  const animateIn = () => {
    if (length < messages[index].length) {
      setLength((s) => s + 2);
      if (length > messages[index].length) {
        setLength(messages[index].length);
      }

      generateRandomText();
      setOutputText(() => randomText);

      setTimeout(() => animateIn(), 20);
    } else {
      setTimeout(() => animateFadeBuffer(), 20);
    }
  };

  const animateFadeBuffer = () => {
    if (!fadeBufferBoolean) {
      setFadeBuffer(() => []);
      for (let i = 0; i < messages[index].length; i++) {
        setFadeBuffer((s) => {
          return [
            ...s,
            {
              c: Math.floor(Math.random() * 12) + 1,
              l: messages[index].charAt(i),
            },
          ];
        });
      }
    }

    setDoCycles(() => false);
    setDecryptingText(() => "");

    for (let i = 0; i < fadeBuffer.length; i++) {
      setFader(() => fadeBuffer[i]);
      if (fader) {
        if (fader.c > 0) {
          setDoCycles(() => true);
          const faderC = fader.c - 1;
          const faderL = fader.l;
          setFader(() => ({ c: faderC, l: faderL }));
          setDecryptingText((s) =>
            s.concat(
              randomCharacters.charAt(
                Math.floor(Math.random() * randomCharacters.length)
              )
            )
          );
        } else {
          setDecryptingText((s) => s.concat(fader.l));
        }
      }
    }

    setOutputText(() => decryptingText);

    if (doCycles) {
      setTimeout(() => animateFadeBuffer(), 50);
    } else {
      setTimeout(() => cycleText(), 2000);
    }
  };

  const cycleText = () => {
    setIndex((s) => s++);
    if (index >= messages.length) {
      setIndex(() => 0);
    }
    setLength(() => 0);
    setFadeBufferBoolean(() => false);
    setTimeout(animateIn, 200);
    setOutputText(() => "");
  };

  return <>{outputText}</>;
};

export default RandomTextEffect;
