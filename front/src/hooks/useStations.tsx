import useSWR from "swr";
import {station} from "../api/station";
import {fetcher} from "../helpers/IFetcher";
import {IStation} from "../models/station";

export const useGetStations = () => {
  const {data, error} = useSWR<IStation>(station.getAllStation(), fetcher);
  const filter = data?.data.filter(item => item.numBikesAvailable > 1);

  return {
    data: filter,
    isLoading: !error && !data,
    isError: error,
  };
};
