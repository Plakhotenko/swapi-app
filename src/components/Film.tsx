import React, { FC } from "react";
import { IFilm } from "../models";
import { Entity } from "./Entity";
import { entityHookFactory } from "../entity-hook-factory";

const useFilm = entityHookFactory<IFilm>('/films');

export const Film: FC = () => {
  const { entity, isLoading, isCacheLoading } = useFilm();

  return <Entity
    entity={entity}
    isLoading={isLoading}
    isCacheLoading={isCacheLoading}
  />
}
