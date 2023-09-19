import { Link } from 'react-router-dom';
import { Container } from './styles';

import arrow from '../../assets/images/arrow.svg';

export default function PageHeader(props) {
  return (
    <Container>
      <Link to='/'>
        <img src={arrow} />
        <span>Voltar</span>
      </Link>

      <span className='title-header'>{props.title}</span>
    </Container>
  );
}
