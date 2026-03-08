import { DF } from "@/types/df";
import { aspirina } from "./aspirina";
import { Relation } from "@/types/database";
import { obtenerSubconjuntos } from "./obtenerSubconjunto";

export function isCandidatClave({
  posibleClaveCAndidata,
  conjuntoDF,
  relacion,
}: {
  posibleClaveCAndidata: string[];
  conjuntoDF: DF[];
  relacion: Relation & { attributes: string[] };
}) {
  const clausura = aspirina({ df: posibleClaveCAndidata, conjuntoDF });

  if (!relacion.attributes.every((item) => clausura.includes(item))) {
    return {
      sucess: false,
      message: "No es clave candidata porque no cubre todos los atributos",
    };
  }
  const subconjuntos = obtenerSubconjuntos(posibleClaveCAndidata);
  for (const subconjunto of subconjuntos) {
    if (subconjunto.length === 0) continue;
    const clausuraSubconjunto = aspirina({ df: subconjunto, conjuntoDF });
    if (
      relacion.attributes.every((item) => clausuraSubconjunto.includes(item))
    ) {
      return {
        sucess: false,
        message:
          "No es clave candidata porque hay un menor subconjunto que cubre todos los atributos",
      };
    }
  }
  return {
    sucess: true,
    message: "Es clave candidata",
  };
}
