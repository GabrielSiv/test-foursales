import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HomeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #555;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  max-width: 400px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #333;
    box-shadow: none;
  }

  &::placeholder {
    color: #999;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background-color: #ffffff;
  cursor: pointer;
  margin-left: 20px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #333;
    box-shadow: none;
  }
`;
