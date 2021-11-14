import database from '../../database';


async function DeleteUserService({
  num_func

}){

  if(!num_func){
    throw new Error('código de funcionario não informado');
  }

  const updateReturn = await database.oneOrNone(
    `delete FROM  SOS_CAD_USUARIO where num_func = $[num_func]
      `,
    {
      num_func,
    },
  );

  const dataReturn = {
    message: "usuario removido"
  }
  return dataReturn;

}

export default DeleteUserService;
