import Header from './Header'
import ListagemProdutos from '../../components/ListagemProdutos'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import { Cardapio, ItemProdutos } from '../Home'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Cardapio[]>([])
  const [restaurante2, setRestaurante2] = useState<ItemProdutos[]>([])
  const [restaurante3, setRestaurante3] = useState<ItemProdutos[]>([])
  const [restaurante4, setRestaurante4] = useState<ItemProdutos[]>([])
  const [restaurante5, setRestaurante5] = useState<ItemProdutos[]>([])
  const [restaurante6, setRestaurante6] = useState<ItemProdutos[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/1`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
    // fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/2`).then(
    //   (res) => res.json().then((res) => setRestaurante2(res))
    // )
    // fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/3`).then(
    //   (res) => res.json().then((res) => setRestaurante3(res))
    // )
    // fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/4`).then(
    //   (res) => res.json().then((res) => setRestaurante4(res))
    // )
    // fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/5`).then(
    //   (res) => res.json().then((res) => setRestaurante5(res))
    // )
    // fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/6`).then(
    //   (res) => res.json().then((res) => setRestaurante6(res))
    // )
  }, [id])

  return (
    <>
      <Header />
      <ListagemProdutos lista={restaurante} listagem={[]} />
      {/* <ListagemProdutos lista={restaurante2} listagem={[]} />
      <ListagemProdutos lista={restaurante3} listagem={[]} />
      <ListagemProdutos lista={restaurante4} listagem={[]} />
      <ListagemProdutos lista={restaurante5} listagem={[]} />
      <ListagemProdutos lista={restaurante6} listagem={[]} /> */}

      <Modal />
    </>
  )
}

export default Category
