import type { ServerLoadEvent } from '@sveltejs/kit';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';
import { load } from './+page.server';

// This could be done with Playwright, but it's a bit overkill for this simple test
describe('About Page', () => {
  it('renders correctly', () => {
    const { getByText } = render(Page, {
      props: {
        data: { current_url: '/about' }
      }
    });

    expect(getByText('About')).toBeTruthy();
    expect(getByText('This is the about page - the the url is /about')).toBeTruthy();
  });
});

// This is a server test, so we don't need to render the component
describe('About Page Server Load', () => {
  it('returns the correct current_url', async () => {
    // Create a minimal event object that satisfies TypeScript
    const mockEvent = {
      url: new URL('http://localhost/about'),
      params: {},
      parent: async () => ({}),
      depends: () => {},
      // If you don't have a specific type for locals, consider using unknown instead of any
    } as unknown as ServerLoadEvent<Partial<Record<string, string>>, Record<string, unknown>, '/about'>;

    const result = await load(mockEvent);
    expect(result).toEqual({ current_url: '/about' });
  });
});
