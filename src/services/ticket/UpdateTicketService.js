import database from "../../database";


async function UpdateTicketService({
  ticket,
  prioridade,
  encerramento,
}) {

  const ticketReturn = await database.many(
    ` update SOS_ABERTURA_TICKET set prioridade = $[prioridade], data_encerramento = ${encerramento?"now()": "null"  }
    where ticket = $[ticket] RETURNING *`,
    {
      ticket,
      prioridade
    }
  );


  return ticketReturn;
}

export default UpdateTicketService;
