
export const getCategory = (url) => {
  const str = url.substring(21, url.length)
  if (str.indexOf('/') === -1) {
    return str.substring(0, str.length)
  }
  return str.substring(0, str.indexOf('/'))
}