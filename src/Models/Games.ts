class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number
  estrela?: string
  destaque: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    destaque: string,
    estrela?: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
    this.estrela = estrela
    this.destaque = destaque
  }
}

export default Game
