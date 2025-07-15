"use client";

import { CategoriesWrapper, StyledList } from "@/lib/styles/ListComponent";
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
  const { users, loading } = useSelector((state: RootState) => state.users);
  const favoriteUsers = useSelector(
    (state: RootState) => state.favorites.users
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

  useEffect(() => {
    dispatch(fetchUsersRequest());
    dispatch(loadFavoritesRequest());
  }, []);
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
        {users.map((user) => {
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
