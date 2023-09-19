import { Container, Header, Separator, HeaderCard } from './styles';

import arrow from '../../assets/images/arrow.svg';
import Card from '../Card';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>

        <a href='/'>Novo contato</a>
      </Header>

      <Separator />

      <HeaderCard>
        <div className='sort-container'>
          <strong>Nome</strong>

          <img src={arrow} />
        </div>
      </HeaderCard>

      <Card />
    </Container>
  )
}
