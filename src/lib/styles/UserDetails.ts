import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
`;

export const UserDetailsCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #eee;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const DetailLabel = styled.span`
  font-weight: 600;
  color: #555;
  min-width: 120px;
`;

export const DetailValue = styled.span`
  color: #777;
  flex-grow: 1;
  text-align: right;
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 20px;
`;

export const LoadingMessage = styled.p`
  color: #333;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 20px;
`;
