// Test for utils.js
describe('Utils', () => {
  test('formatDate should format correctly', () => {
    const date = new Date('2025-04-08T00:00:00.000Z');
    expect(formatDate(date)).toBe('2025-04-08T00:00:00.000Z');
  });
});