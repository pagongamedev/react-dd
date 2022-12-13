export const helperScrollCheckArrow = (target: Element) => {
  const isArrowLeft = target.scrollLeft > 0;
  const isArrowRight = target.scrollLeft + target.clientWidth < target.scrollWidth;

  //   console.log(
  //     'E ',
  //     target.scrollWidth,
  //     ' : ',
  //     target.clientWidth,
  //     ' : ',
  //     target.scrollLeft,
  //     ' : ',
  //     target.scrollLeft + target.clientWidth,
  //   );
  return { isArrowLeft, isArrowRight };
};
