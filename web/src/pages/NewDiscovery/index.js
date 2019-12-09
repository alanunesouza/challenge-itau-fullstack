import React, { useEffect, useState } from 'react';

import { Container, Error } from './styles';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';

export default function NewDiscovery() {
  const [discovery, setDiscovery] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, []);

  function handleSubmit(data) {
    api.post('/discovery', data)
      .then(window.history.back())
      .catch(setErrorMessage("Ocorreu um erro. Tente novamente mais tarde."));
  }

  return (
    <Container>
      <div>
        <h1>Adicionar descoberta</h1>
      </div>

      <Form initialData={discovery} onSubmit={handleSubmit}>

        <Input name="name" placeholder="Nome da descoberta" />
        <Input name="description" placeholder="Descrição" />
        <Input name="reference_point" placeholder="Ponto de referência" />
        <Input name="additional_comments" placeholder="Comentários adicionais" />

        <button type="submit">Salvar descoberta</button>
      </Form>

      {errorMessage !== "" && (
        <Error><span>{errorMessage}</span></Error>
      )}
    </Container>
  );
}
