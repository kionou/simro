export const getImage = (path) => {
  try{
    return require(`@/assets/${path}`)
  } catch (e){
    // return require('@/assets/images/')
  }
}
