const ImageLike = (curtiu) => {
  if (curtiu) {
    return require('../../../assets/heart-checked.png')
  } else {
    return require('../../../assets/heart-disabled.png')
  }
}

const curtiuFoto = (curtiu, likes) => {
  let qnt = likes
  if (curtiu) {
    qnt--
  } else {
    qnt++
  }

  return [!curtiu, qnt]
}


export { ImageLike, curtiuFoto }