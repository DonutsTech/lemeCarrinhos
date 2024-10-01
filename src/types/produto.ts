import { StaticImageData } from "next/image";

export interface IProduto { 
  titulo: string,
  capacidade?: Array<string>,
  descricao?: string,
  imagem: StaticImageData,
  id: string,
}