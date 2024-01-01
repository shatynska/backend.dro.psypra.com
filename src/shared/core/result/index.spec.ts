import { Result, failure, success } from './index';

function doSomeThing(shouldSuccess: boolean): Result<string, string> {
  if (shouldSuccess) {
    return success('success');
  } else {
    return failure('failure');
  }
}

it('should be true when use isSuccess() and false when use isFailure()', () => {
  const result = doSomeThing(true);

  expect(result.isSuccess()).toBe(true);
  expect(result.isFailure()).toBe(false);
});

it('should be true when use isFailure() and false when use isSuccess()', () => {
  const result = doSomeThing(false);

  expect(result.isFailure()).toBe(true);
  expect(result.isSuccess()).toBe(false);
});
