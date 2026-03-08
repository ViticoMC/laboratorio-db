import { DF } from "@/types/df";

// Compara dos DF individuales
function areDFEqual(a: DF, b: DF): boolean {
  const sameArray = (x: string[], y: string[]) => {
    if (x.length !== y.length) return false;
    const sx = [...x].sort();
    const sy = [...y].sort();
    return sx.every((v, i) => v === sy[i]);
  };

  return (
    sameArray(a.implicantes, b.implicantes) &&
    sameArray(a.implicados, b.implicados)
  );
}

// Compara dos arrays DF[]
export function areDFArraysEqual(arr1: DF[], arr2: DF[]): boolean {
  if (arr1.length !== arr2.length) return false;

  // Creamos una copia del segundo array para ir marcando coincidencias
  const used = new Set<number>();

  for (const df1 of arr1) {
    let matched = false;

    for (let i = 0; i < arr2.length; i++) {
      if (!used.has(i) && areDFEqual(df1, arr2[i])) {
        used.add(i);
        matched = true;
        break;
      }
    }

    if (!matched) return false;
  }

  return true;
}
