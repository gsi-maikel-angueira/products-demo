const onceAndAfter = <Fn extends (...args: any[]) => any>(f: Fn, g: Fn) => {
  let done = false;
  return ((...args: Parameters<Fn>) => {
    if (!done) {
      done = true;
      return f(...args);
    } else {
      return g(...args);
    }
  }) as Fn;
};

export default onceAndAfter;
