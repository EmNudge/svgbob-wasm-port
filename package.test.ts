import { test, expect } from 'vitest';
import { getRenderer } from './output';

test("it renders something", async () => {
  const render = await getRenderer();
  
  const output = render('|hello|');
  expect(output.includes('.svgbob')).toBe(true);
});