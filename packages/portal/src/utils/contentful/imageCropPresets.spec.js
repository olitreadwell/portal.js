import {
  FULL_VIEWPORT_PRESETS,
  FULL_VIEWPORT_PRESETS_FOCUS_FACE,
  IMAGE_CONTAINER_PRESETS,
  IMAGE_CONTAINER_SIZES
} from '@/utils/contentful/imageCropPresets.js';

describe('utils/contentful/imageCropPresets', () => {
  describe('FULL_VIEWPORT_PRESETS', () => {
    it('defines a width and height for every supported breakpoint', () => {
      const breakpoints = ['small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'wqhd', '4k', '4k+'];

      breakpoints.forEach((breakpoint) => {
        expect(FULL_VIEWPORT_PRESETS[breakpoint]).toMatchObject({
          w: expect.any(Number),
          h: expect.any(Number),
          fit: 'fill'
        });
      });
    });
  });

  describe('FULL_VIEWPORT_PRESETS_FOCUS_FACE', () => {
    it('adds a face focus to every full viewport preset', () => {
      Object.keys(FULL_VIEWPORT_PRESETS).forEach((breakpoint) => {
        expect(FULL_VIEWPORT_PRESETS_FOCUS_FACE[breakpoint]).toEqual({
          ...FULL_VIEWPORT_PRESETS[breakpoint],
          f: 'face'
        });
      });
    });
  });

  describe('IMAGE_CONTAINER_PRESETS', () => {
    it('defines a width for every supported breakpoint', () => {
      const breakpoints = ['small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'wqhd', '4k', '4k+'];

      breakpoints.forEach((breakpoint) => {
        expect(IMAGE_CONTAINER_PRESETS[breakpoint]).toMatchObject({
          w: expect.any(Number)
        });
      });
    });
  });

  describe('IMAGE_CONTAINER_SIZES', () => {
    it('joins the responsive sizes into a single srcset string', () => {
      expect(IMAGE_CONTAINER_SIZES).toContain('(max-width: 575px) 545px');
      expect(IMAGE_CONTAINER_SIZES).toContain('826px');
      expect(IMAGE_CONTAINER_SIZES.split(',').length).toBe(5);
    });
  });
});
