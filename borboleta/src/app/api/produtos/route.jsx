import { NextResponse } from "next/server";

export async function GET() {
  const produtos = [
    {
      id: "copo-300ml",
      nome: "Copo de 300ml",
      precoBase: 13.90,
      imagem: "/img/copo300ml.png"
    },
    {
      id: "copo-400ml",
      nome: "Copo de 400ml",
      precoBase: 15.90,
      imagem: "/img/copo400ml.png"
    },
    {
      id: "copo-500ml",
      nome: "Copo de 500ml",
      precoBase: 18.00,
      imagem: "/img/copo500ml.png"
    }
  ];

  return NextResponse.json(produtos, { status: 200 });
}