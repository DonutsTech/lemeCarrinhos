import { Endereco } from "./cep";
import { CNPJData } from "./cnpj";

export interface Form {
  nome: string;
	telefone: string;
	email: string;
	cep: string;
	cnpj: string;
	mensagem: string;
}

export interface FormConjunto extends Form {
  endereco?: Endereco | undefined | null,
  cnpjInfo?: CNPJData | undefined | null,
}
