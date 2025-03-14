export function cep(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  e.currentTarget.value = value;
  return e;
}

export function phone(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  e.currentTarget.value = value;
  return e;
}

export function cnpj(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{4})/, "$1/$2");
  value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

