
export async function init ({ store, redirect, isClient }) {
  if (isClient) return

  try {
    await store.dispatch('LOAD_ITEMS', 'topstories.json')
  } catch (error) {
    redirect('/error')
  }
}
