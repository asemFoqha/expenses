import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client/api-client";

export interface FetchResponse<T> {
  success: boolean;
  data: T[] | null;
}

const useData = <T>(
  endPoint: string,
  requistConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[] | null>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requistConfig,
        })
        .then((res) => {
          //TODO: remove the log

          setData(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading, setData };
};

export default useData;
