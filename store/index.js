
/**
 * State vars
 * @returns {{locales: string[], locale: string, items: *[], info: Array}}
 */
export const state = () => ({
  menu: [
    {
      icon: 'catalog',
      title: 'Catalog',
      to: '/'
    },
    {
      icon: 'financials',
      title: 'Financials',
      to: '/financials'
    },
    {
      icon: 'data',
      title: 'Data',
      to: '/data'
    }
  ],
  catalog: [],
  locales: ['en', 'es'],
  locale: 'en'
})
/**
 * Methods defined for state mutations
 * @type {{setItems(*, *): void, setInfo(*, *): void, SET_LANG(*, *=): void}}
 */
export const mutations = {
  /**
   * Set db.json information
   * @param state
   * @param catalog
   */
  setCatalog (state, catalog) {
    state.catalog = catalog
  },
  /**
   * Define App Language (if needed)
   * @param state
   * @param locale
   * @constructor
   */
  // SET_LANG (state, locale) {
  //   if (state.locales.indexOf(locale) !== -1) {
  //     state.locale = locale
  //   }
  // },
}
/**
 * API Calls and Promise actions
 * @type {{LOAD_INFO({commit: *}): Promise<void>}}
 */
export const actions = {
  /**
   * Load all db.json info
   * @param commit
   * @returns {Promise<void>}
   * @constructor
   */
  async LOAD_CATALOG ({ commit }, dataUrl) {
    const dbPromise = process.BROWSER_BUILD ? import('~/api/'+dataUrl) : Promise.resolve(require('~/api/'+dataUrl))
    const response = await dbPromise
    commit('setCatalog', response)
  },
  /**
   * Generic API Call
   * @param commit
   * @param dataUrl
   * @returns {Promise<void>}
   * @constructor
   */
  // async LOAD_ITEMS ({ commit }, dataUrl) {
  //   const response = await axios.get(dataUrl)
  //   const ids = response.data
  //   const tenIds = ids.slice(0, 10)
  //
  //   const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
  //   const itemsResponses = await Promise.all(itemsPromises)
  //   const items = itemsResponses.map(res => res.data)
  //
  //   const realItems = items.map(
  //     item =>
  //       item || {
  //         title: 'Failed to load',
  //         id: 0
  //       }
  //   )
  //   commit('setItems', realItems)
  // },
}
