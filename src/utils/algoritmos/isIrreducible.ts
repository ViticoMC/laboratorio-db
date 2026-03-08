import { DF } from "@/types/df";
import { aspirina } from "./aspirina";
import { obtenerSubconjuntos } from "./obtenerSubconjunto";
import { sonEquivalentes } from "./areEquivalentes";

export function getIrreducible(F: DF[]) {
  const result: DF[] = [];
  // step one separar lado derecho
  for (const dp of F) {
    if (dp.implicados.length > 1) {
      for (const separar of dp.implicados) {
        result.push({ implicantes: dp.implicantes, implicados: [separar] });
      }
    } else {
      result.push({ implicantes: dp.implicantes, implicados: dp.implicados });
    }
  }

  // step two buscar redundancias - usar result en lugar de F
  for (let i = 0; i < result.length; i++) {
    result[i] = searchRedundancias(result, result[i]);
  }

  // step three buscar df innecesarias
  const toRemove: number[] = [];
  for (let i = 0; i < result.length; i++) {
    if (toRemove.includes(i)) continue;

    const restSubConj = result.filter(
      (_, j) => j !== i && !toRemove.includes(j),
    );

    // Verificar si el conjunto sin esta DF es equivalente al conjunto completo
    // Solo marcar para remover si son equivalentes
    const currentWithout = result.filter((_, j) => !toRemove.includes(j));
    if (sonEquivalentes(currentWithout, restSubConj)) {
      toRemove.push(i);
    }
  }

  // Eliminar las dependencias marcadas como innecesarias
  const finalResult = result.filter((_, i) => !toRemove.includes(i));

  // Si el resultado está vacío, devolver al menos el resultado del paso 2
  return finalResult.length > 0 ? finalResult : result;
}

function searchRedundancias(F: DF[], f: DF) {
  const subconjuntos = obtenerSubconjuntos(f.implicantes);
  for (const subconjunto of subconjuntos) {
    const clausuraSubconjunto = aspirina({ df: subconjunto, conjuntoDF: F });
    if (f.implicados.every((item) => clausuraSubconjunto.includes(item))) {
      return searchRedundancias(F, {
        implicantes: subconjunto,
        implicados: f.implicados,
      });
    }
  }
  return f;
}
