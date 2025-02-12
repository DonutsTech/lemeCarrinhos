import { FormConjunto } from "@/types/form"

export function mensagemEnviada(form: FormConjunto) {
  return `
    Prezado(a) Administrador(a),

    Você recebeu uma nova mensagem através do formulário de contato do ${form.nome}. Abaixo estão os detalhes enviados pelo remetente:

    Nome: ${form.nome}
    Email: ${form.email === undefined || form.email.trim() === '' ? '----- Contato Não informou ----- ' : form.email }
    Telefone: ${form.telefone}
    CPNJ:  ${form.cnpj === undefined || form.cnpj.trim() === '' ? '----- Contato Não informou ----- ' : form.cnpj }

    Endereço de Cliente:
      Rua: ${form.endereco === undefined || form.endereco === null ? '----- Contato Não informou ----- ' : `${form.endereco.logradouro}` }
      Bairro: ${form.endereco === undefined || form.endereco === null ? '----- Contato Não informou ----- ' : form.endereco.bairro }
      Cidade: ${form.endereco === undefined || form.endereco === null ? '----- Contato Não informou ----- ' : `${form.endereco.localidade} - ${form.endereco.uf}` }
      CEP: ${form.endereco === undefined || form.endereco === null ? '----- Contato Não informou ----- ' : form.cep }

    Dados do CNPJ:
      - Razão Social:  ${form.cnpjInfo === undefined || form.cnpjInfo === null ? '----- Contato Não informou ----- ' : form.cnpjInfo.company.name }
      - Nome Fantasia:  ${form.cnpjInfo === undefined || form.cnpjInfo === null ? '----- Contato Não informou ----- ' : form.cnpjInfo?.alias }
      - Data de Fundação:  ${form.cnpjInfo === undefined || form.cnpjInfo === null  ? '----- Contato Não informou ----- ' : form.cnpjInfo?.founded }
      - Status:  ${form.cnpjInfo === undefined || form.cnpjInfo === null  ? '----- Contato Não informou ----- ' : form.cnpjInfo?.status.text }
      - Data do Status:  ${form.cnpjInfo === undefined || form.cnpjInfo === null ? '----- Contato Não informou ----- ' : form.cnpjInfo?.statusDate }
      - Atividade Principal:  ${form.cnpjInfo === undefined || form.cnpjInfo === null ? '----- Contato Não informou ----- ' : form.cnpjInfo?.mainActivity.text }
      - Sócios:  ${form.cnpjInfo === undefined || form.cnpjInfo === null ? '----- Contato Não informou ----- ' : form.cnpjInfo?.company.members.map((socio) => socio.person.name).join(',\n') }

    Mensagem:  ${form.cnpjInfo === undefined || form.cnpjInfo === null  ? '----- Contato Não informou ----- ' : form.email }

    Por favor, entre em contato com o remetente para mais informações, caso necessário.

  `
}
