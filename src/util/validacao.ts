import { Endereco, ViaCEPErro, ViaCEPResponse } from "@/types/cep";
import { CNPJData } from "@/types/cnpj";
import { Form, FormConjunto } from "@/types/form";

export const validateEmail = (email: string) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
};

export const validatePhone = (phone: string) => {
  const regex = /^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4,5}$/;
  return regex.test(phone);
};

const isViaCEPErro = (data: ViaCEPResponse): data is ViaCEPErro => {
  return (data as ViaCEPErro).erro !== undefined;
};

const fetchEndereco = async (cep: string): Promise<Endereco | null> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data: ViaCEPResponse = await response.json();

    if (isViaCEPErro(data)) {
      console.log('Cep não encontrado.');
      return null;
    }

    return data as Endereco;
  } catch (error) {
    console.error('Erro ao buscar endereço:', error);
    return null;
  }
};


const fetchCNPJData = async (cnpj: string) => {
  try {
    const response = await fetch(`https://open.cnpja.com/office/${cnpj}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar informações do CNPJ:', error);
    return null;
  }
};

export const validateMensagem = async (value: Form) => {
  let novo: FormConjunto = { ...value }

  if (value.nome.trim() === '' || value.telefone.trim() === '' || value.nome === undefined || value.telefone === undefined || value.cep.trim() === '' || value.cep === undefined) {
    return 'O nome e o telefone e o cep são obrigatórios'
  }

  if (!(value.email === '') && !(validateEmail(value.email))) {
    return 'E-mail inválido, digite novamente.'
  }

  if (!(validatePhone(value.telefone))) {
    return 'Telefone inválido, digite novamente.'
  }

  if (!(value.cep.trim() === '' || value.cep === undefined)) {
    const endereco: Endereco | null = await fetchEndereco(value.cep.replace('-', ''))

    if (endereco === null) {
      return 'CEP inválido, digite novamente.'
    }

    novo = { ...novo, ...endereco }
  }

  if (!(value.cnpj.trim() === '' || value.cnpj === undefined)) {
    const cnpjInfo: CNPJData | null = await fetchCNPJData(value.cnpj)

    if (cnpjInfo === null) {
      return 'CNPJ inválido, digite novamente'
    }

    novo = { ...novo, ...cnpjInfo }
  }

  return novo
}
