import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'

import {
  ButtonAside,
  CepeNumero,
  Complemento,
  ContainerCart,
  Endereco,
  LabelInput,
  Overlay,
  Sidebar
} from './styles'

const CartEntregas = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate() // Inicializar useNavigate

  // const dispatch = useDispatch()

  // const handleClick = () => {
  //   dispatch(open())
  //   const itemToAdd: ItemProdutos = {
  //     foto,
  //     descricao,
  //     nome,
  //     porcao,
  //     preco,
  //     id,
  //     avaliacao: 0
  //   }
  //   dispatch(add(itemToAdd))
  //   closeModal()
  //   closeModal()
  // }

  const goBack = () => {
    navigate(-1) // Volta para a página anterior
  }

  // const removeItem = (id: number) => {
  //   dispatch(remove(id))
  // }

  // const getTotalPreco = () => {
  //   return items
  //     .reduce((accumulator, valorAtual) => {
  //       return (accumulator += valorAtual.preco)
  //     }, 0)
  //     .toFixed(2)
  // }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  return (
    <ContainerCart className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <Sidebar>
        <h3>Entrega</h3>
        <LabelInput>
          <label htmlFor="fullName">Quem irá receber</label>
          <input id="fullName" type="text" />
        </LabelInput>
        <LabelInput>
          <label htmlFor="fullEndereco">Endereço</label>
          <input id="fullEndereco" type="text" />
        </LabelInput>
        <LabelInput>
          <label htmlFor="fullCidade">Cidade</label>
          <input id="fullCidade" type="text" />
        </LabelInput>
        <Endereco>
          <CepeNumero className="enderecos">
            <label htmlFor="fullCodigo">CEP</label>
            <input id="fullCodigo" type="text" />
          </CepeNumero>
          <CepeNumero>
            <label htmlFor="numero">Número</label>
            <input id="numero" type="text" />
          </CepeNumero>
        </Endereco>
        <Complemento>
          <label htmlFor="follName">
            <LabelInput className="margin">
              <label htmlFor="fullComplemento">Complemento (opcional)</label>
              <input id="fullComplemento" type="text" />
            </LabelInput>
          </label>
        </Complemento>
        <ButtonAside title="Clique aqui para continuar comprando" type="button">
          {/* <Link className="buttom" to={'/entrega'}>
            Continuar com o pagamento
          </Link> */}
          Continuar com o pagamento
        </ButtonAside>
        <ButtonAside
          onClick={goBack} // Chama goBack para voltar à página anterior
          title="Clique aqui para continuar comprando"
          type="button"
        >
          Volar para o carrinho
        </ButtonAside>
      </Sidebar>
    </ContainerCart>
  )
}

export default CartEntregas
