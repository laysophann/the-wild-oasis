import { useQuery } from "@tanstack/react-query";

import getCabin from "../../services/apiCabins";

export function useCabins() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabin,
  });

  return { isPending, error, cabins };
}
