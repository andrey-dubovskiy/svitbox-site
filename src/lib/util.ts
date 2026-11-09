// Path to a file in /public that respects the configured base path.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith('/') ? base : base + '/') + path.replace(/^\//, '');
}

// Text in [square brackets] is a draft placeholder to replace with real content.
export function isTodo(text?: string): boolean {
  return !!text && text.trim().startsWith('[');
}

// Site link: "#programs" points to a section of the home page, "rozklad/" to a page.
// Keeps the base path, so links work both on GitHub Pages and on the final domain.
export function link(href: string): string {
  if (/^(https?:|tel:|mailto:)/.test(href) || href === '#') return href;
  return asset(href.startsWith('#') ? '' : href) + (href.startsWith('#') ? href : '');
}
