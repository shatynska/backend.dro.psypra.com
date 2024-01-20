import { ShouldBeWithinLengthRangeRule } from './should-be-within-length-range.rule';

describe('ShouldBeWithinLengthRangeRule', () => {
  it.each([
    { parameter: 'appropriate', expected: false },
    { parameter: 'looooooooooooooooooong', expected: true },
    { parameter: 'short', expected: true },
    { parameter: '', expected: true },
  ])(
    `isBroken method should returns "$expected" when parameter is "$parameter"`,
    ({ parameter, expected }) => {
      expect(
        new ShouldBeWithinLengthRangeRule(parameter, 6, 20).isBroken(),
      ).toBe(expected);
    },
  );
});
