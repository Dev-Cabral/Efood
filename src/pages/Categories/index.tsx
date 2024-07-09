import Header from './Header'
import pizza from '../../asserts/images/pizza.png'
import ListagemProdutos from '../../components/ListagemProdutos'
import Modal from './Modal'
import { useEffect, useState } from 'react'

type Cardapio = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: string[]
}

const Category = () => {
  const [restaurante, setRestaurante] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurante').then((res) =>
      res.json().then((res) => setRestaurante(res))
    )
  }, [])

  return (
    <>
      <Header />
      <ListagemProdutos produtos={[]} />
      <Modal />
    </>
  )
}

export default Category
