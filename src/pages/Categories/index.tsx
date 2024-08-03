import Header from './Header'
import ListagemProdutos from '../../components/ListagemProdutos'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import { Cardapio, ItemProdutos } from '../Home'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { id } = useParams()
  // alert(id)

  const [restaurante, setRestaurante] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  return (
    <>
      <Header prato={restaurante} pratos={undefined} />
      <ListagemProdutos lista={restaurante} listagem={[]} />
      <Modal />
    </>
  )
}

export default Category
