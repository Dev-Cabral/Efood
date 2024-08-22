import Header from './Header'
import ListagemProdutos from '../../components/ListagemProdutos'
import { useEffect, useState } from 'react'
import { Cardapio } from '../Home'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Cardapio>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  return (
    <>
      <Header prato={restaurante} />
      <ListagemProdutos listagem={restaurante?.cardapio} />
    </>
  )
}

export default Category
