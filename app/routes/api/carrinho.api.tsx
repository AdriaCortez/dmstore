"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

interface ItemCarrinho {
  id: any;
  nome: string;
  preco: number;
  quantidade: number;
}

export default function Carrinho () {

    const [item, setItem] = useState <ItemCarrinho []>([])

    useEffect({

    }, [])

    const 



}