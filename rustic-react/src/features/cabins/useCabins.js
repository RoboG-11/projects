import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useCabins() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("discount");
  let filter = null;

  if (filterValue === "all") {
    filter = null;
  } else if (filterValue === "no-discount") {
    filter = { field: "discount", method: "eq", value: 0 };
  } else if (filterValue === "with-discount") {
    filter = { field: "discount", method: "gt", value: 0 };
  }

  // SortBy
  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ["cabins", filter, sortBy, page],
    queryFn: () => getCabins({ filter, sortBy, page }),
  });

  //  Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cabins", filter, sortBy, page + 1],
      queryFn: () => getCabins({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["cabins", filter, sortBy, page - 1],
      queryFn: () => getCabins({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, cabins, error, count };
}
