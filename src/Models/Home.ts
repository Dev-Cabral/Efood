class Home {
  highlight: boolean
  category: string
  description: string
  image: string
  foodType: string
  title: string
  id: number
  estrela?: string

  constructor(
    id: number,
    highlight: boolean,
    category: string,
    description: string,
    image: string,
    foodType: string,
    title: string,
    estrela?: string
  ) {
    this.id = id
    this.highlight = highlight
    this.category = category
    this.description = description
    this.image = image
    this.foodType = foodType
    this.title = title
    this.estrela = estrela
  }
}

export default Home
