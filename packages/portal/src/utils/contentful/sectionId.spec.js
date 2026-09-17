import sectionId from '@/utils/contentful/sectionId.js';

describe('utils/contentful/sectionId', () => {
  it('kebab-cases the English name when present', () => {
    expect(sectionId({ nameEN: 'About the project' })).toBe('about-the-project');
  });

  it('falls back to the English headline when there is no name', () => {
    expect(sectionId({ headlineEN: 'Our Partners' })).toBe('our-partners');
  });

  it('prefers the name over the headline', () => {
    expect(sectionId({ nameEN: 'About', headlineEN: 'Headline' })).toBe('about');
  });
});
