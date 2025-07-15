import styled from "styled-components";

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  padding: 8px 12px;
  margin-left: 10px;
  white-space: nowrap;
  position: absolute;
  right: 64px;

  background-color: ${(props) => (props.$isFavorite ? "#ddd" : "#333")};

  color: ${(props) => (props.$isFavorite ? "#333" : "#ddd")};

  border: none;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const ShowMoreButton = styled.button`
  background: none;
  margin: 0;
  cursor: pointer;

  width: 100%;
  display: block;
  padding: 10px;
  text-align: center;

  border: 1px solid #ddd;
  border-width: 1px 0px 0px 0px;

  font-weight: 600;
  font-size: 1rem;
  color: #333;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const AccordionItemContainer = styled.li<{ $isOpen: boolean }>`
  margin-bottom: 16px;

  background-color: ${(props) => (props.$isOpen ? "#f0f0f0" : "#f9f9f9")};

  border: solid #ddd;
  border-width: 1px 0px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #333;
    width: 33%;
    padding: 0 16px;
  }
  p {
    color: #555;
    width: 33%;
    padding: 0 16px;
  }
`;

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  padding-top: ${(props) => (props.$isOpen ? "16px" : "0")};
  margin-top: ${(props) => (props.$isOpen ? "16px" : "0")};

  border-top: ${(props) => (props.$isOpen ? "1px solid #ddd" : "none")};

  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;

  p {
    margin: 5px 0;
    padding: 0 16px 16px 16px;
    color: #666;
    font-size: 0.95em;
    width: 33%;
  }
  strong {
    color: #333;
  }
`;
