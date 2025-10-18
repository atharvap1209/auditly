export const track = (name: string, props?: Record<string, unknown>) => {
  try {
    // Replace with real analytics later
    // eslint-disable-next-line no-console
    console.log('analytics:event', name, props || {});
  } catch (e) {}
}
