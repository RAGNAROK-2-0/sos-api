import database from '../../database';

async function UpdateUserService({
  num_func,
  nome,
  setor,
  email,
  senha
}){

  if(!num_func){
    throw new Error('código de funcionario não informado');
  }

  const updateReturn = await database.oneOrNone(
    `update SOS_CAD_USUARIO
      set nome = $[nome]
          ,setor = $[setor]
          ,email = $[email]
          ,senha  = $[senha]
      where num_func = $[num_func] RETURNING *`,
    {
      num_func,
      nome,
      setor,
      email,
      senha
    },
  );

  return updateReturn;
}

export default UpdateUserService;
