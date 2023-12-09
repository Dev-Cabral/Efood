import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Links } from './styles'

import logo from '../../asserts/images/logo.png'
import carrinho from '../../asserts/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    {/* <div>
      <img src={logo} alt="EFOOD" />
    </div> */}
    <div>
      <Link to="/"></Link>
      {/* <nav>
        <Links></Links>
        <LinkCart href="#">
          0 - produtos(s)
          <img src={carrinho} alt="Carrinho" />
        </LinkCart>
      </nav> */}
    </div>
  </HeaderBar>
)

export default Header
