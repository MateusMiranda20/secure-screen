import {
  Container,
  H1,
  Button
} from './styles';

import { useAccess } from '../../context/AccessContext';
import { useNavigate } from 'react-router-dom';

function PublicScreen() {
  const navigate = useNavigate()
  const { grantAccess } = useAccess()

  const handButtonClick = () => {
    grantAccess()
    navigate('/sobre')
  }


  return (
    <Container>
      <H1>Tela pública</H1>
      <Button onClick={handButtonClick}>
        Acessar tela segura
      </Button>
    </Container>
  )
}

export default PublicScreen;