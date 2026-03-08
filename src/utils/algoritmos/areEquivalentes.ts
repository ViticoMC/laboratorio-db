import { DF } from "@/types/df";
import { aspirina } from "./aspirina";

export function sonEquivalentes(F: DF[], G: DF[]) {
  for (const dp of F) {
    const clausura = aspirina({ df: dp.implicantes, conjuntoDF: G });
    if (!dp.implicados.every((item) => clausura.includes(item))) {
      return false;
    }
  }
  for (const dp of G) {
    const clausura = aspirina({ df: dp.implicantes, conjuntoDF: F });
    if (!dp.implicados.every((item) => clausura.includes(item))) {
      return false;
    }
  }
  return true;
}
