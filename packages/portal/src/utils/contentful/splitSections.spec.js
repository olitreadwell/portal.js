import splitSections from '@/utils/contentful/splitSections.js';

describe('utils/contentful/splitSections', () => {
  it('returns an empty array when given no items', () => {
    const sections = splitSections([], 'landingSection');

    expect(sections).toEqual([]);
  });

  it('puts each item of the specified type into its own entry', () => {
    const items = [
      { '__typename': 'landingSection', id: 1 },
      { '__typename': 'landingSection', id: 2 }
    ];

    const sections = splitSections(items, 'landingSection');

    expect(sections).toEqual([
      { '__typename': 'landingSection', id: 1 },
      { '__typename': 'landingSection', id: 2 }
    ]);
  });

  it('groups consecutive items of other types into a single array', () => {
    const items = [
      { '__typename': 'otherType', id: 1 },
      { '__typename': 'otherType', id: 2 }
    ];

    const sections = splitSections(items, 'landingSection');

    expect(sections).toEqual([
      [
        { '__typename': 'otherType', id: 1 },
        { '__typename': 'otherType', id: 2 }
      ]
    ]);
  });

  it('starts a new group of other types after a specified-type item', () => {
    const items = [
      { '__typename': 'otherType', id: 1 },
      { '__typename': 'landingSection', id: 2 },
      { '__typename': 'otherType', id: 3 },
      { '__typename': 'otherType', id: 4 }
    ];

    const sections = splitSections(items, 'landingSection');

    expect(sections).toEqual([
      [{ '__typename': 'otherType', id: 1 }],
      { '__typename': 'landingSection', id: 2 },
      [
        { '__typename': 'otherType', id: 3 },
        { '__typename': 'otherType', id: 4 }
      ]
    ]);
  });
});
