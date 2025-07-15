"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/store";

import {
  Container,
  LoadingMessage,
  ErrorMessage,
  Title,
  DetailLabel,
  DetailRow,
  DetailValue,
  UserDetailsCard,
} from "../lib/styles/UserDetails";

import { fetchUserByIdRequest } from "@/store/users/actions";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface UserDetailsProps {
  userId: string;
}

export default function UserDetails({ userId }: UserDetailsProps) {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.users.currentUser);
  const loading = useAppSelector((state) => state.users.loading);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserByIdRequest(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Carregando informações do usuário...</LoadingMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Erro: {error}</ErrorMessage>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <ErrorMessage>Nenhum usuário encontrado.</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Detalhes do Usuário</Title>
      <UserDetailsCard>
        <DetailRow>
          <DetailLabel>Nome:</DetailLabel>
          <DetailValue>{user.name}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Nome de Usuário:</DetailLabel>
          <DetailValue>{user.username}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Email:</DetailLabel>
          <DetailValue>{user.email}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Telefone:</DetailLabel>
          <DetailValue>{user.phone}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Website:</DetailLabel>
          <DetailValue>{user.website}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Empresa:</DetailLabel>
          <DetailValue>{user.company.name}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Endereço:</DetailLabel>
          <DetailValue>
            {user.address.street}, {user.address.suite}, {user.address.city},
            {user.address.zipcode}
          </DetailValue>
        </DetailRow>
      </UserDetailsCard>
    </Container>
  );
}
