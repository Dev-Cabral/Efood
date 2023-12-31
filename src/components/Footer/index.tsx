import { Container, Efood, FooterSection, Links } from './styles'
import logo from '../../asserts/images/logo.png'
import instagram from '../../asserts/images/instagram.png'
import facebook from '../../asserts/images/facebook.png'
import twiter from '../../asserts/images/twitter.png'

const Footer = () => (
  <Container>
    <div>
      <FooterSection>
        <Efood>
          <img src={logo} alt="EFOOD" />
        </Efood>
        <Links>
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
          <li>
            <img src={facebook} alt="Facebook" />
          </li>
          <li>
            <img src={twiter} alt="Twiter" />
          </li>
        </Links>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
