import database from '../database';


async function CreatePatientsService({
  patient_name,
  user_id,
  key,
}){
  const patient = await database.one(
    'INSERT INTO PATIENTS VALUES(DEFAULT, $[user_id], $[patient_name], $[key], NOW()) RETURNING *',
    {
      patient_name,
      user_id,
      key,
    },
  );

  return patient;
}

export default CreatePatientsService;
