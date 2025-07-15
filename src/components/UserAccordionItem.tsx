"use client";

import React from "react";

import {
  ShowMoreButton,
  AccordionContent,
  AccordionHeader,
  AccordionItemContainer,
  FavoriteButton,
} from "@/lib/styles/UserAccordionComponent";

import { User } from "@/store/users/types";

interface AccordionItemProps {
  user: User;
  isFavorite: boolean;
  onToggleFavorite: (user: User) => void;
}

const UserAccordionItem = ({
  user,
  isFavorite,
  onToggleFavorite,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const btnText = isOpen ? "VER MENOS" : "VER MAIS";
  return (
    <AccordionItemContainer $isOpen={isOpen}>
      <AccordionHeader>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <FavoriteButton
          $isFavorite={isFavorite}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(user);
          }}
        >
          {isFavorite ? "Remover" : "Favoritar"}
        </FavoriteButton>
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>
        <p>
          <strong>Endereço:</strong>
          <br />
          {user.address.street},{user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
        <p>
          <strong>Empresa:</strong>
          <br />
          {user.company.name}, "{user.company.catchPhrase}"
        </p>
        <p>
          <strong>Website: </strong>
          <br />
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
      </AccordionContent>
      <ShowMoreButton
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {btnText}
      </ShowMoreButton>
    </AccordionItemContainer>
  );
};

export default UserAccordionItem;
