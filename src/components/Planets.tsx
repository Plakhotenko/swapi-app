import React, { FC } from 'react';
import { Entities } from './Entities';
import { entitiesHookFactory } from '../entities-hook-factory';
import { IPlanet } from '../models';

const usePlanets = entitiesHookFactory<IPlanet>('/planets');

export const Planets: FC = () => {
  const { entities, isLoading, isCacheLoading } = usePlanets();

  return (
    <Entities
      entities={entities}
      isLoading={isLoading}
      entitiesUrl="planets"
      isCacheLoading={isCacheLoading}
    />
  );
};
