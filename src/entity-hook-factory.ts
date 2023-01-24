import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBarContext } from "./providers/ErrorBarProvider";
import { useParams } from "react-router-dom";
import { client } from "./client";

export const entityHookFactory = <T>(url: string) => () => {
  const [entity, setEntity] = useState<T>({} as T);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isCacheLoading, setCacheLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  const { showError } = useContext(ErrorBarContext);

  const { id } = useParams();

  const itemUrl = `${url}/${id}`;

  useEffect(() => {
    (async () => {
      const data = localStorage.getItem(itemUrl);

      if (data) {
        setCacheLoading(true);
        setEntity(JSON.parse(data));
      } else {
        setLoading(true);
      }

      try {
        const { data } = await client.get<T>(itemUrl);
        localStorage.setItem(itemUrl, JSON.stringify(data));
        setEntity(data);
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
  }, [])

  return { entity, isLoading, isCacheLoading };
}
