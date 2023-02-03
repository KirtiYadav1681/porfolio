import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Web Developer", "Tech Enthusiast", 'React Developer'];

const TypeAnimation = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <> 
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.stiff}
        style={{ color: '#FFDF6C', fontSize:'15px', fontWeight:'bold', position:'absolute' }}
      />
    </>
  );
};

export default TypeAnimation;
