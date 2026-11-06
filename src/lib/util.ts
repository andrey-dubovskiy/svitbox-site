// Path to a file in /public that respects the configured base path.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith('/') ? base : base + '/') + path.replace(/^\//, '');
}

// Text in [square brackets] is a draft placeholder to replace with real content.
export function isTodo(text?: string): boolean {
  return !!text && text.trim().startsWith('[');
}
