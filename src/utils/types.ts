type Indexable = {
  [key:string] : any
}

export type Blog = {
  title: string,
  tag: string,
  tagline: string, 
  link: string,
  coverImg: string
}

export type Service = {
  name: string, 
  description: string,
  price: string,
}

export type Submission = Indexable & {
    name: string,
    email: string,
    subject: string,
    message: string,
  }