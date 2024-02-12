import "@testing-library/jest-dom";
import once from "./once";

describe("Test Once function", () => {
  test("demo", () => {
    expect(true).toBe(true);
  });

  test("without once", () => {
    const myFn = jest.fn();
    myFn();
    myFn();
    myFn();

    expect(myFn).toHaveBeenCalledTimes(3);
  });

  test("with 'once', a function runs one time", () => {
    const myFn = jest.fn();
    const onceFn = jest.fn(once(myFn));
    onceFn();
    onceFn();
    onceFn();
    expect(onceFn).toHaveBeenCalledTimes(3);
    expect(myFn).toHaveBeenCalledTimes(1);
  });
});
