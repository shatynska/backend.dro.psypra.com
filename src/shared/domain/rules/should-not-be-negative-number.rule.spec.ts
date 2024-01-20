import { ShouldNotBeNegativeNumberRule } from './should-not-be-negative-number.rule';

describe('ShouldNotBeNegativeNumber', () => {
  it.each([
    { parameter: 0, expected: false },
    { parameter: 1, expected: false },
    { parameter: -1, expected: true },
  ])(
    `isBroken method should returns $expected when parameter is $parameter`,
    ({ parameter, expected }) => {
      expect(new ShouldNotBeNegativeNumberRule(parameter).isBroken()).toBe(
        expected,
      );
    },
  );
});
