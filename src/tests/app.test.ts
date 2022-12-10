import { emptyFn } from "../app"
 
describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(emptyFn('')).toBe(0);
  });
});