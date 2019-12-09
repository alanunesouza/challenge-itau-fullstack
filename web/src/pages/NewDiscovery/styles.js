import styled from 'styled-components';
import { darken } from 'polished';

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

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #666;
      margin: 0 0 10px;
      &::placeholder {
        color: #ccc;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#F64C75')};
    }
  }
`;

export const Error = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  background-color: ${darken(0.03, '#F64C75')};

  span {
    color: #fff;
    font-size: 16px;
  }
`;
