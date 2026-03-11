import { Relation } from "@/types/database";
import { State } from "@/types";
import { useState, useEffect } from "react";
import { fdSetService, relationService } from "@/services";

interface InfoDashboard {
  relaciones: Relation[];
  totalSetDF: number;
}

export function useGetInfoDashboard() {
  const [dashboardInfo, setDashboardInfo] = useState<InfoDashboard>({
    relaciones: [],
    totalSetDF: 0,
  });

  const [state, setState] = useState<State>();

  useEffect(() => {
    async function loadData() {
      try {
        setState({
          state: "loading",
        });

        const data = await relationService.getAll();

        let totalSets = 0;
        for (const rel of data) {
          const sets = await fdSetService.getByRelationId(rel.id);
          totalSets += sets.length;
        }

        setDashboardInfo({
          relaciones: data,
          totalSetDF: totalSets,
        });

        setState({
          state: "sucess",
        });
      } catch (error) {
        setState({
          state: "error",
          message: "Error al cargar los datos",
        });
      }
    }
    loadData();
  }, []);

  return {
    dashboardInfo,
    state,
  };
}
