import { portfolio } from '../data/portfolio';

describe('portfolio data', () => {
  test('personal name is correct', () => {
    expect(portfolio.personal.name).toBe('Miguelángel Cabrera');
  });

  test('has experience entries', () => {
    expect(Array.isArray(portfolio.experience.roles)).toBeTrue();
    expect(portfolio.experience.roles.length).toBeGreaterThan(0);
  });

  test('has projects', () => {
    expect(Array.isArray(portfolio.projects)).toBeTrue();
    expect(portfolio.projects.length).toBeGreaterThan(0);
  });
});