"use client";

import UserDetails from "@/components/UserDetails";
import { useParams } from "next/navigation";
import React from "react";

export default function UserDetailPage({}) {
  const params = useParams();
  const userId = params.id;

  if (typeof userId !== "string" || !userId) {
    return (
      <div>
        <h1>Erro: ID de usuário inválido ou não fornecido.</h1>
        <p>Por favor, verifique a URL. O ID deve ser um valor único.</p>
      </div>
    );
  }

  return <UserDetails userId={userId} />;
}
