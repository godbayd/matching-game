export const select = e => document.querySelector(e)
export const selectAll = e => Array.from(document.querySelectorAll(e))
export const requireAllFromFolder = (context, debug) => {
    const cache = {},
          keys = context.keys()
    keys.map(key => {
        cache[key] = context(key)
    })
    if (debug) console.log(cache)
    return cache;
}
export const c = x => console.log(x)
