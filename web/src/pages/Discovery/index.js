import React, { useEffect, useState } from 'react';

import { Container, ListContainer, Table, ButtonAdd } from './styles';
import api from '~/services/api';
import plus from '../../assets/plus.svg';
import trash from '../../assets/trash.svg';

export default function Discovery() {
  const [discoveries, setDiscoveries] = useState([]);
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    loadDiscovery();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, []);

  async function loadDiscovery() {
    await api
      .get('discovery')
      .then(response => setDiscoveries(response.data))
      .catch(e => console.log(e));
  }

  function handleDelete(id) {
    api.delete(`/discovery/${id}`)
      .then(loadDiscovery)
      .catch(e => console.log(e))
  }

  return (
    <Container>
      <div>
        <h1>Lista de descobertas</h1>
        <ButtonAdd to="/discoveries/add">
          <img src={plus} alt="Add" />
        </ButtonAdd>
      </div>

      <ListContainer>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              {width >= 768 && (<th>PONTO DE REFERÊNCIA</th>)}
              {width >= 768 && (<th>COMENTÁRIOS ADICIONAIS</th>)}
              <th>EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {discoveries.length > 0 &&
              discoveries.map((discovery, index) => (
                <tr key={index}>
                  <td>{discovery.name}</td>
                  <td>{discovery.description}</td>
                  {width >= 768 && (<td>{discovery.reference_point}</td>)}
                  {width >= 768 && (<td>{discovery.additional_comments}</td>)}
                  <td>
                    <img src={trash} alt="Trash" onClick={() => handleDelete(discovery.id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ListContainer>
    </Container>
  );
}
