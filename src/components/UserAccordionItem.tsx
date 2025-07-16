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

interface AccordionItemState {
  isOpen: boolean;
}

class UserAccordionItem extends React.Component<
  AccordionItemProps,
  AccordionItemState
> {
  constructor(props: AccordionItemProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { user, isFavorite, onToggleFavorite } = this.props;

    const { isOpen } = this.state;

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
            <a href={`/users/${user.id}`} rel="noopener noreferrer">
              <strong>Mais detalhes</strong>
            </a>
          </p>
        </AccordionContent>
        <ShowMoreButton onClick={this.toggleAccordion}>
          {btnText}
        </ShowMoreButton>
      </AccordionItemContainer>
    );
  }
}

export default UserAccordionItem;
