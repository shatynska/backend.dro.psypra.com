import { Uuid } from './uuid.value-object';

const mockUuid = '6f1d5062-6e57-4868-a5a3-6a889047b9d8';
jest.mock('uuid', () => ({ v4: () => mockUuid }));

describe('Uuid', () => {
  it('should return an UUID', () => {
    const received = new Uuid(mockUuid);

    expect(received.getValue()).toBe(mockUuid);
  });

  it('should generate and return an UUID', () => {
    const received = new Uuid();

    expect(received.getValue()).toBe(mockUuid);
  });
});
