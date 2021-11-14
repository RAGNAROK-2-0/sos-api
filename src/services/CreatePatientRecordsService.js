import database from '../database';

async function CreatePatientRecordsService({
  patient_id,
  key,
}) {
  const patient = await database.one(
    'INSERT INTO PATIENT_RECORDS VALUES(DEFAULT, $[patient_id], $[key], NOW()) RETURNING *',
    {
      patient_id,
      key,
    },
  );

  return patient;
}

export default CreatePatientRecordsService;
