import { Uuid } from './uuid.value-object';

jest.mock('uuid', () => ({ v4: () => '6f1d5062-6e57-4868-a5a3-6a889047b9d8' }));

describe('Uuid', () => {
  it('should generate a UUID', () => {
    const result = new Uuid();

    expect(result.value).toBe('6f1d5062-6e57-4868-a5a3-6a889047b9d8');
  });
});
