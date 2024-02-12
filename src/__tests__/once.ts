const once = <Fn extends (...args: any[]) => any>(fn: Fn) => {
  let done = false;
  return ((...args: Parameters<Fn>) => {
    if (!done) {
      done = true;
      return fn(...args);
    }
  }) as Fn;
};

export default once;
