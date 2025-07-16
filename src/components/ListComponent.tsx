"use client";

import {
  CategoriesWrapper,
  StyledList,
  ErrorMessage,
} from "@/lib/styles/ListComponent";
import { LoadingMessage } from "@/lib/styles/LoadingMessage";
import { AppDispatch, RootState } from "@/store";
import { fetchUsersRequest } from "@/store/users/actions";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAccordionItem from "./UserAccordionItem";
import {
  addFavorite,
  loadFavoritesRequest,
  removeFavorite,
} from "@/store/favorites/actions";
import { User } from "@/store/users/types";

const ListComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const favoriteUsers = useSelector(
    (state: RootState) => state.favorites.users
  );
  const { filterType, searchTerm } = useSelector(
    (state: RootState) => state.filter
  );
  const favoriteUserIds = useMemo(() => {
    return new Set(favoriteUsers.map((user) => user.id));
  }, [favoriteUsers]);

  const handleToggleFavorite = useCallback(
    (user: User) => {
      const isFavorite = favoriteUserIds.has(user.id);
      if (isFavorite) {
        dispatch(removeFavorite(user.id));
      } else {
        dispatch(addFavorite(user));
      }
    },
    [dispatch, favoriteUserIds]
  );

  const filteredUsers = useMemo(() => {
    let currentUsers = users;

    if (searchTerm) {
      currentUsers = currentUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType === "favorites") {
      currentUsers = currentUsers.filter((user) =>
        favoriteUserIds.has(user.id)
      );
    }

    return currentUsers;
  }, [users, searchTerm, filterType, favoriteUserIds]);

  useEffect(() => {
    dispatch(fetchUsersRequest());
    dispatch(loadFavoritesRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <LoadingMessage>
        Carregando lista de usuários...
        <div className="loader" />
      </LoadingMessage>
    );
  }

  if (error) {
    return <ErrorMessage>Erro ao carregar usuários: {error}</ErrorMessage>;
  }

  if (!users || users.length === 0) {
    return <ErrorMessage>Nenhum usuário encontrado.</ErrorMessage>;
  }

  return (
    <div>
      <CategoriesWrapper>
        <p>
          <strong>Nome:</strong>
        </p>
        <p>
          <strong>Email:</strong>
        </p>
        <p>
          <strong>Telefone:</strong>
        </p>
      </CategoriesWrapper>
      <StyledList>
        {filteredUsers.map((user: User) => {
          const isFavorite = favoriteUserIds.has(user.id);
          return (
            <UserAccordionItem
              key={user.id}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
              user={user}
            />
          );
        })}
      </StyledList>
    </div>
  );
};

export default ListComponent;
