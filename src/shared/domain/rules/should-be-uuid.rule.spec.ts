import { ShouldBeUuidV4Rule } from './should-be-uuid.rule';

describe('ShouldBeUuidV4Rule', () => {
  it.each([
    { parameter: 'c0287617-9f36-489e-ba72-d462777987e9', expected: false },
    { parameter: 'notUuid', expected: true },
    { parameter: '', expected: true },
  ])(
    `isBroken method should returns "$expected" when parameter is "$parameter"`,
    ({ parameter, expected }) => {
      expect(new ShouldBeUuidV4Rule(parameter).isBroken()).toBe(expected);
    },
  );
});
