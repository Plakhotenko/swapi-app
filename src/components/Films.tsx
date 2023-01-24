import React, { FC } from "react";
import { Entities } from "./Entities";
import { entitiesHookFactory } from '../entities-hook-factory';
import { IFilm } from "../models";

const useFilms = entitiesHookFactory<IFilm>('/films');

export const Films: FC = () => {
  const { entities, isLoading, isCacheLoading } = useFilms();

  return <Entities
    entities={entities}
    isLoading={isLoading}
    entitiesUrl="films"
    isCacheLoading={isCacheLoading}
  />
};
