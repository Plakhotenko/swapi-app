import React, { FC } from "react";
import { Entities } from "./Entities";
import { entitiesHookFactory } from '../entities-hook-factory';
import { IStarship } from "../models";

const useStarships = entitiesHookFactory<IStarship>('/starships');

export const Starships: FC = () => {
  const { entities, isLoading, isCacheLoading } = useStarships();

  return <Entities
    entities={entities}
    isLoading={isLoading}
    entitiesUrl="starships"
    isCacheLoading={isCacheLoading}
  />;
};
