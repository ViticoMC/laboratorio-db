import { DF } from "@/types/df";

export function aspirina({
  df,
  conjuntoDF,
}: {
  df: string[];
  conjuntoDF: DF[];
}) {
  const clausura = [...df];
  const dfswithCheck = conjuntoDF.map((item) => {
    return {
      ...item,
      checked: false,
    };
  });
  agregarItemsToClausura(clausura, dfswithCheck);

  const clausuraClean = [...new Set(clausura)];

  return clausuraClean;
}

interface DFWithCheck extends DF {
  checked: boolean;
}

function agregarItemsToClausura(clausura: string[], conjuntoDF: DFWithCheck[]) {
  for (const dependencia of conjuntoDF) {
    if (dependencia.checked) continue;
    const isSubConj = dependencia.implicantes.every((item) =>
      clausura.includes(item),
    );
    if (isSubConj) {
      dependencia.checked = true;
      clausura.push(...dependencia.implicados);
      return agregarItemsToClausura(clausura, conjuntoDF);
    }
  }
}
