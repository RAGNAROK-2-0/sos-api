import database from "../../database";

async function CreateUserService({
  nome,
  setor,
  email,
  senha,
}){
  const userExists = await database.oneOrNone(
    "SELECT * FROM SOS_CAD_USUARIO where email = $[email]",
    {
      email,
    }
  );

  if (userExists) {
    throw new Error("usuario já cadastrado");
  }

  const { num_func } = await database.oneOrNone(
    "select max(num_func)+1 as num_func from SOS_CAD_USUARIO"
  );

  const user = await database.one(
    "INSERT INTO SOS_CAD_USUARIO VALUES($[num_func], $[nome],$[setor],$[email],NOW(),$[senha] ) RETURNING *",
    {
      num_func,
      nome,
      setor,
      email,
      senha,
    }
  );

  return user;
}

export default CreateUserService;
