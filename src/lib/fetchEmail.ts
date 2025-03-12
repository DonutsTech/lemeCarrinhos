import { Email } from "@/types/email"

export async function fetchEmail(email: Email) {
  try {
    const response = await fetch('https://fvpc9zk6oc.execute-api.us-east-1.amazonaws.com/dev/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer wBa6i42xLa5mW1hr8zCVa4g08yke4erWK9TkBrRgfrdYFxx80Pxzt0uB39WAZdmu4vtyQdG2QCuV'
      },
      body: JSON.stringify({
        name: email.name,
        to: email.to,
        subject: email.subject,
        text: email.text,
      }),
    })

    const data = await response.json()

    if (data.mensagem !== 'Mensagem Recebida Com Sucesso!') {
      return 'Mensagem não enviada. Contate-nos por telefone.'
    }

    return data.mensagem
  } catch (error) {
    console.log(error)
    return 'Mensagem não enviada. Contate-nos por telefone.'
  }
}