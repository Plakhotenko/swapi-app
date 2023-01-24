import React, { FC } from "react";
import { IPlanet } from "../models";
import { Entity } from "./Entity";
import { entityHookFactory } from "../entity-hook-factory";

const usePlanet = entityHookFactory<IPlanet>('/planets');

export const Planet: FC = () => {
  const { entity, isLoading, isCacheLoading } = usePlanet();

  return <Entity
    entity={entity}
    isLoading={isLoading}
    isCacheLoading={isCacheLoading}
  />;
}
