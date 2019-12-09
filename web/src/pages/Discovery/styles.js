import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    margin: 50px 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    margin: 0 0 40px 40px;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const ListContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin: 10px 0;
  padding: 0 10%;

  @media (max-width: 767px) {
    padding: 0 2%;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  align-items: center;
  border-collapse: collapse;

  thead {
    tr {
      border: 0;
    }
  }

  tr {
    height: 50px;
    border-bottom: 2px solid #eee;
  }

  td,
  th {
    width: 25%;
    text-align: left;
  }
`;

export const Button = styled.a`
  color: ${props => props.color};
  margin: 10px;
  cursor: pointer;
`;

export const ButtonAdd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  width: 50px;
  height: 50px;

  img {
    width: 30px;
    height: 30px;
    fill: '#ccc'
  }
`;
