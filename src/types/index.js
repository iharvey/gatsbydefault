import { shape, number, string } from "prop-types"

export const fixedImgType = shape({
  base64: string,
  height: number,
  src: string,
  srcSet: string,
  width: number,
})

export const fluidImgType = shape({
  aspectRatio: number,
  base64: string,
  sizes: string,
  src: string,
  srcSet: string,
})
