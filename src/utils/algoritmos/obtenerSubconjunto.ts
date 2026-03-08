export function obtenerSubconjuntos(array: string[]) {
  const resultado: [string[]] = [[]];

  for (const elemento of array) {
    const nuevosSubconjuntos = resultado.map((subconjunto) => [
      ...subconjunto,
      elemento,
    ]);

    resultado.push(...nuevosSubconjuntos);
  }

  // Filtramos para eliminar el subconjunto que sea igual al array original
  return resultado.filter((subconjunto) => subconjunto.length !== array.length);
}
