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

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

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
