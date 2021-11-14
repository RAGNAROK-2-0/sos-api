import database from "../database";

export async function LoginService({ num_func,senha }){
  const user = await database.oneOrNone<User>(
    "SELECT * FROM sos_cad_usuario WHERE NUM_FUNC = $[num_func] and senha=$[senha]",
    {
      num_func,
      senha
    }
  );

  if (!user) {
    throw new Error("Usuário Inválido.");
  }

  return user;
}

