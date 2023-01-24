import React, { FC } from "react";
import { ISpeccy } from "../models";
import { Entity } from "./Entity";
import { entityHookFactory } from "../entity-hook-factory";

const useSpeccy = entityHookFactory<ISpeccy>('/species');

export const Speccy: FC = () => {
  const { entity, isLoading, isCacheLoading } = useSpeccy();

  return <Entity
    entity={entity}
    isLoading={isLoading}
    isCacheLoading={isCacheLoading}
  />;
}
