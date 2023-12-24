import { Either, left, right } from './index';

function doSomeThing(shouldSuccess: boolean): Either<string, string> {
  if (shouldSuccess) {
    return right('success');
  } else {
    return left('error');
  }
}

it('should be true when use isRight() and false when use isLeft()', () => {
  const result = doSomeThing(true);

  expect(result.isRight()).toBe(true);
  expect(result.isLeft()).toBe(false);
});

it('should be true when use isLeft() and false when use isRight()', () => {
  const result = doSomeThing(false);

  expect(result.isLeft()).toBe(true);
  expect(result.isRight()).toBe(false);
});
