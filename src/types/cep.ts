export interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  complemento?: string;
}

export interface ViaCEPErro {
  erro: boolean;
}

export type ViaCEPResponse = Endereco | ViaCEPErro;
