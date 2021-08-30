import React, { useState } from "react";

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
  const [text, setText] = useState(messages);
  const [length, setLength] = useState(messages.length);
  const randomCharacters = "&#*+%?£@§$";
  const [randomText, setRandomText] = useState("");
  const [fadeBuffer, setFadeBuffer] = useState<fadeBufferProps[]>([]);
  const [fader, setFader] = useState<fadeBufferProps>();
  const [doCycles, setDoCycles] = useState(false);

  const generateRandomText = () => {
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
    if (length < randomText.length) {
      setLength((s) => s + 2);
      if (length > randomText.length) {
        setLength(randomText.length);
      }

      generateRandomText();

      setTimeout(() => animateIn(), 1200);
    } else {
      setTimeout(() => animateFadeBuffer(), 1200);
    }
  };

  const animateFadeBuffer = () => {
    if (!fadeBuffer.length) {
      setFadeBuffer(() => []);
      for (let i = 0; i < randomText.length; i++) {
        setFadeBuffer((s) => {
          return [
            ...s,
            {
              c: Math.floor(Math.random() * 12) + 1,
              l: randomText.charAt(i),
            },
          ];
        });
      }
    }

    for (let i = 0; i < fadeBuffer.length; i++) {
      setFader(() => fadeBuffer[i]);
      if (fader) {
        if (fader.c > 0) {
          setDoCycles(true);
          const faderC = fader.c - 1;
          const faderL = fader.l;
          setFader(() => ({ c: faderC, l: faderL }));
          setText((s) =>
            s.concat(
              randomCharacters.charAt(
                Math.floor(Math.random() * randomCharacters.length)
              )
            )
          );
        } else {
          setText((s) => s.concat(fader.l));
        }
      }
    }

    if (doCycles) {
      setTimeout(() => animateFadeBuffer(), 500);
    } else {
      setTimeout(() => cycleText(), 2000);
    }
  };

  const cycleText = () => {
    if (text.length + 1 >= length) {
      setText("");
    }
    setLength(0);
    setFadeBuffer([]);
    setTimeout(animateIn, 200);
  };

  return <>{randomText + text}</>;
};

export default RandomTextEffect;
