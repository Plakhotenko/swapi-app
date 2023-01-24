import React, { FC } from "react";
import { IStarship } from "../models";
import { Entity } from "./Entity";
import { entityHookFactory } from "../entity-hook-factory";

const useStarship = entityHookFactory<IStarship>('/starships');

export const Starship: FC = () => {
  const { entity, isLoading, isCacheLoading } = useStarship();

  return <Entity
    entity={entity}
    isLoading={isLoading}
    isCacheLoading={isCacheLoading}
  />;
}
