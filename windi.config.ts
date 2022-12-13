const range = (size, startAt = 1) => {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
};

export default {
  safelist: [
    range(101, 0).map((i) => {
      const sReturn = `w-[${i}%]`;
      // console.log('sReturn :', sReturn);
      return sReturn;
    }),
  ],
  theme: {
    extend: {
      fontSize: {
        '08rem': ['0.8rem', '1.1rem'],
        '09rem': ['0.9rem', '1.2rem'],
      },
      colors: {
        // Configure your color palette here
      },
      keyframes: {
        scaleltor: {
          '0%': {
            'transform-origin': '0% 50%',
            transform: 'scaleX(0)',
          },
          '100%': {
            'transform-origin': '0% 50%',
            transform: 'scaleX(1)',
          },
        },
      },
      animation: {
        'scale-l-to-r': 'scaleltor 1s ease-in-out',
      },
    },
  },
};
