import React, { FC } from 'react';
import { Entities } from './Entities';
import { entitiesHookFactory } from '../entities-hook-factory';
import { IPerson } from '../models';

const usePeople = entitiesHookFactory<IPerson>('/people');

export const People: FC = () => {
  const { entities, isLoading, isCacheLoading } = usePeople();

  return (
    <Entities
      entities={entities}
      isLoading={isLoading}
      entitiesUrl="people"
      isCacheLoading={isCacheLoading}
    />
  );
};
