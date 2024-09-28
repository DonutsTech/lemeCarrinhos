import { StaticImageData } from "next/image";

export interface IProduto { 
  titulo: string,
  texto: string,
  imagem: StaticImageData,
  id: string,
}