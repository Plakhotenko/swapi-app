import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBarContext } from "./providers/ErrorBarProvider";
import { client } from "./client";

export const entitiesHookFactory = <T>(url: string) => () => {
  const [entities, setEntities] = useState<T[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isCacheLoading, setCacheLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  const { showError } = useContext(ErrorBarContext);

  useEffect(() => {
    (async () => {
      const results = localStorage.getItem(url);

      if (results) {
        setCacheLoading(true);
        setEntities(JSON.parse(results));
      } else {
        setLoading(true);
      }

      try {
        const { data: { results } } = await client.get<{ results: T[] }>(url);
        localStorage.setItem(url, JSON.stringify(results));
        setEntities(results);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          redirect('/not-found');
        } else {
          showError(error?.message);
        }
      } finally {
        setCacheLoading(false);
        setLoading(false);
      }
    })()
  }, []);

  return { entities, isLoading, isCacheLoading };
}
