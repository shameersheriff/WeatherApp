import { UTCToDatePipe } from './utcto-date.pipe';

describe('UTCToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new UTCToDatePipe();
    expect(pipe).toBeTruthy();
  });
});
