class Home {
  category: string
  description: string
  image: string
  system: string
  title: string
  id: number
  estrela?: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    system: string,
    title: string,
    estrela?: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.system = system
    this.title = title
    this.estrela = estrela
  }
}

export default Home
