export interface BlogPostNodeShort {
  title: string
  slug: string
  createdAt: string
  body: {
    childMarkdownRemark: {
      excerpt: string
    }
  }
  image: {
    fluid: FluidImgType
  }
}

// export interface FluidImgType {
//   aspectRatio: number
//   src: string
//   srcSet: string
//   sizes: string
//   base64?: string
//   srcWebp?: string
//   srcSetWebp?: string
//   tracedSVG?: string
// }

// export interface FixedImgType {
//   width: number
//   height: number
//   src: string
//   srcSet: string
//   base64?: string
//   tracedSVG?: string
//   srcWebp?: string
//   srcSetWebp?: string
// }

// export interface ChildImageSharp {
//   resolutions?: {
//     tracedSVG: string
//     src?: string
//     fixedObject?: FixedObject
//   }
//   fluid?: {
//     aspectRatio: number
//     base64: string
//     src: string
//     srcSet: string
//     sizes: string
//   }
//   id?: string
// }

// // export interface File {
// //   id: string
// //   childImageSharp?: ChildImageSharp
// //   name?: string
// //   sourceInstanceName?: string
// // }
// // export interface FileEdge {
// //   node: File
// // }
// // export interface AllFile {
// //   edges: [FileEdge]
// // }
