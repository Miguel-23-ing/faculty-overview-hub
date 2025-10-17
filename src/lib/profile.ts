export const professorProfile = {
  nombre: "Miguel Ángel Pérez",
  correo: "miguel.perez@u.icesi.edu.co",
  telefono: "+57 320 637 0182",
  lugar: "Cali, Colombia",
};

export function computeAvailability(docenciaHours: number, investigacionHours = 0, organizacionesHours = 0, maxHours = 48) {
  const used = docenciaHours + investigacionHours + organizacionesHours;
  const available = Math.max(0, maxHours - used);
  const percent = Math.round((available / maxHours) * 100);
  return { used, available, percent, maxHours };
}