import firebase_api from "@/api/firebaseApi";

export const SaveDatos1 = async({commit}, Data) =>{
  //desestructurar data
  console.log("llego", Data);
  const {
    idhc,
    motivoConsulta,
    Enfermedad,
    TratPrevios,
    MedPrevios,
    peso,
    talla,
    estatura,
    imc,
    temp,
    fcardiaca,
    frespiratoria,
    tarterial,
    bd,
    ant,
  } = Data;
  //preparar datos de almacenamiento y parametros
  const DatatoSave = {
    idhc,
    motivoConsulta,
    Enfermedad,
    TratPrevios,
    MedPrevios,
    peso,
    talla,
    estatura,
    imc,
    temp,
    fcardiaca,
    frespiratoria,
    tarterial,
    ant,
  };

  const Ruta = `/${bd}.json`;
    const { data } = await firebase_api.post(Ruta, DatatoSave);
    DatatoSave.id=data.name
    console.log("guardando "+ DatatoSave)
}