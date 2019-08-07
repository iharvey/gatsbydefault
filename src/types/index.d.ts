export type BlogPostNodeShort = {
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

export type FluidImgType = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64?: string
  srcWebp?: string
  srcSetWebp?: string
  tracedSVG?: string
}

export type FixedImgType = {
  width: number
  height: number
  src: string
  srcSet: string
  base64?: string
  tracedSVG?: string
  srcWebp?: string
  srcSetWebp?: string
}

// export interface ChildImageSharp {
//   resolutions?: {
//     tracedSVG: string
//     src?: string
//     fixedObject?: FixedObject
//   }
//   fluid?: {
//     aspectRatio: number
//     base64: string
//     originalImg: string
//     originalName: string
//     src: string
//     srcSet: string
//     srcSetWebp: string
//     srcWebp: string
//     tracedSVG: string
//     sizes: string
//   }
//   id?: string
// }

// export interface Cover {
//   childImageSharp: ChildImageSharp
//   id: string
//   relativePath: string
// }

// export interface Frontmatter {
//   category: string
//   published: boolean
//   tags: [string]
//   cover: Cover | null
//   date: string
//   title: string
// }

// export interface MarkdownRemarkNode {
//   excerpt: string
//   fields: {
//     slug: string
//   }
//   frontmatter: Frontmatter
//   timeToRead: number
//   html?: string
// }

// export interface MarkdownRemark {
//   node: MarkdownRemarkNode
// }

// export interface AllMarkdownRemark {
//   edges: [MarkdownRemark]
//   totalCount: number
// }

// export interface File {
//   id: string
//   childImageSharp?: ChildImageSharp
//   name?: string
//   sourceInstanceName?: string
// }
// export interface FileEdge {
//   node: File
// }
// export interface AllFile {
//   edges: [FileEdge]
// }