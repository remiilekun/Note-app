import { formatNoteDate, generateUUID } from '@/utils/misc';

describe('formatNoteDate', () => {
  it("formats today's date correctly", () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    expect(formatNoteDate(date)).toBe(`${hours}:${minutes}`);
  });

  it('formats other dates correctly', () => {
    const date = new Date('2021-01-01');
    const hours = date.getHours();
    expect(formatNoteDate(date)).toBe(`0${hours}:00 01/01/2021`);
  });
});

describe('generateUUID', () => {
  it('generates UUID correctly', () => {
    const uuid = generateUUID();
    expect(uuid).toHaveLength(36);
  });
});
