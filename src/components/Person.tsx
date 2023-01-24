import React, { FC } from "react";
import { IPerson } from "../models";
import { Entity } from "./Entity";
import { entityHookFactory } from "../entity-hook-factory";

const usePerson = entityHookFactory<IPerson>('/people');

export const Person: FC = () => {
  const { entity, isLoading, isCacheLoading} = usePerson();

  return <Entity
    entity={entity}
    isLoading={isLoading}
    isCacheLoading={isCacheLoading}
  />
}
