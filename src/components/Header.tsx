"use client";

import React, { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

import {
  HeaderContainer,
  HomeButton,
  SearchInput,
  StyledSelect,
} from "@/lib/styles/Header";

import { setSearchTerm, setFilterType } from "@/store/filter/actions";
import { HomeIcon } from "@/lib/Icons/HomeIcon";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setLocalSearchTerm] = useState("");
  const [filterType, setLocalFilterType] = useState<"favorites" | "all">("all");

  const isHomePage = pathname === "/";

  const handleHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLocalSearchTerm(value);
      dispatch(setSearchTerm(value));
    },
    [dispatch]
  );

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as "favorites" | "all";
      setLocalFilterType(value);
      dispatch(setFilterType(value));
    },
    [dispatch]
  );

  return (
    <HeaderContainer>
      <HomeButton
        onClick={handleHomeClick}
        aria-label="Ir para a página inicial"
      >
        <HomeIcon />
      </HomeButton>

      {isHomePage && (
        <>
          <SearchInput
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            aria-label="Campo de busca"
          />

          <StyledSelect
            value={filterType}
            onChange={handleFilterChange}
            aria-label="Filtrar usuários"
          >
            <option value="all">Todos</option>
            <option value="favorites">Favoritos</option>
          </StyledSelect>
        </>
      )}
    </HeaderContainer>
  );
}
