import React, { useEffect, useState } from 'react';

import { Container, ListContainer, Table, Button, ButtonAdd } from './styles';
import api from '~/services/api';

import plus from '../../assets/plus.svg';

export default function Students() {
  const [discoveries, setDiscoveries] = useState([]);

  useEffect(() => {
    async function loadDiscovery() {
      await api
        .get('discovery')
        .then(response => setDiscoveries(response.data))
        .catch(e => console.log(e));
    }

    loadDiscovery();

    console.log(discoveries);
  }, []);

  return (
    <Container>
      <div>
        <h1>Lista de descobertas</h1>
        <ButtonAdd>
          <img src={plus} alt="Add" />
        </ButtonAdd>
      </div>

      <ListContainer>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PONTO DE REFERÊNCIA</th>
              <th>COMENTÁRIOS ADICIONAIS</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {discoveries.length > 0 &&
              discoveries.map(discovery => (
                <tr>
                  <td>{discovery.name}</td>
                  <td>{discovery.description}</td>
                  <td>{discovery.reference_point}</td>
                  <td>{discovery.additional_comments}</td>
                  <td>
                    <Button color="#2054C3">editar</Button>
                    <Button color="#F44646">apagar</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ListContainer>
    </Container>
  );
}
