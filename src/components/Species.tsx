import React, { FC } from "react";
import { Entities } from "./Entities";
import { entitiesHookFactory } from '../entities-hook-factory';
import { ISpeccy } from "../models";

const useSpecies = entitiesHookFactory<ISpeccy>('/species');

export const Species: FC = () => {
  const { entities, isLoading, isCacheLoading } = useSpecies();

  return <Entities
    entities={entities}
    isLoading={isLoading}
    entitiesUrl="species"
    isCacheLoading={isCacheLoading}
  />;
};
