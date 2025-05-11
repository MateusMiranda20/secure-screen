import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, H1, Button } from './styles';
import { useAccess } from '../../context/AccessContext';
import { socket } from '../../socket'; 

function PublicScreen() {
  const navigate = useNavigate();
  const { grantAccess } = useAccess();

  const handleButtonClick = () => {
    socket.emit('request_access');
  };

  useEffect(() => {
    // Handler para quando o acesso for concedido
    const handleGrantAccess = () => {
      grantAccess();
      navigate('/sobre');
    };

    // Handler para quando o acesso for negado
    const handleDenyAccess = () => {
      alert('Acesso negado. Já há alguém na tela segura.');
    };

    // Registra os eventos
    socket.on('access_granted', handleGrantAccess);
    socket.on('access_denied', handleDenyAccess);

    // Limpa os eventos ao desmontar
    return () => {
      socket.off('access_granted', handleGrantAccess);
      socket.off('access_denied', handleDenyAccess);
    };
  }, [grantAccess, navigate]);

  return (
    <Container>
      <H1>Tela pública</H1>
      <Button onClick={handleButtonClick}>
        Acessar tela segura
      </Button>
    </Container>
  );
}

export default PublicScreen;
