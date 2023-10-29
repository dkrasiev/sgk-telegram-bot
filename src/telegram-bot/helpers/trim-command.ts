const regex = new RegExp(/(^\/\S*)/)

export const trimCommand = (text: string) => {
  return text.replace(regex, '').trim()
}
