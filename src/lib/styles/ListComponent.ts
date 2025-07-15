import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0 36px;
  background-color: #f8f8f8;
  border-radius: 8px;
  margin: 0 auto;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 48px;
  background-color: #f8f8f8;
  p {
    color: #333;
    font-size: 2rem;
    width: 33%;
    font-weight: 600;
  }
`;

export const ErrorMessage = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #dc3545;
  font-weight: 500;
  font-size: 1.2rem;
`;
