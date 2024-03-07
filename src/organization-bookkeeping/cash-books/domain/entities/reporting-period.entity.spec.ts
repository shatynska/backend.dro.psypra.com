import { ReportingPeriod } from './reporting-period.entity';

describe('ReportingPeriod', () => {
  // TODO mock Uuid

  const received = ReportingPeriod.create({
    title: 'test',
    isTitleUnique: true,
    startDate: '2000-01-01',
    endDate: '2000-02-02',
  });

  const newReportingPeriod = received.value as ReportingPeriod;

  it('should be defined', () => {
    expect(ReportingPeriod).toBeDefined();
  });

  it('should create reporting period with defined title', () => {
    expect(received.value).toBeInstanceOf(ReportingPeriod);

    expect(newReportingPeriod).toMatchObject({ title: { value: 'test' } });
  });

  it('should return object with primitives', () => {
    expect(newReportingPeriod.mapToPrimitives()).toMatchObject({
      title: 'test',
    });
  });
});
