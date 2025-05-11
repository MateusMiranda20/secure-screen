import { useAccess } from '../../context/AccessContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../socket'; 

import {
  Container,
  Button,
  H1,
  H2,
} from './styles';

const SecureScreen = () => {
  const { revokeAccess } = useAccess();
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      socket.emit('release_access');
      revokeAccess();
      navigate('/')
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const Navigate = () => {
    socket.emit('release_access');
    revokeAccess();
    navigate('/');
  }

  return (
    <Container>
      <H1>Tela Segura</H1>
      <Button onClick={Navigate}>Voltar para tela pública</Button>
      <H2>Tempo restante: {timeLeft}</H2>
    </Container>
  );
};

export default SecureScreen;
