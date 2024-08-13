import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { easeCubicInOut } from 'd3-ease';

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: {
      duration: 2000,
      easing: easeCubicInOut,
    },
  });

  return <animated.span>{number.to(n => Math.floor(n))}</animated.span>;
};

export default AnimatedNumber;
