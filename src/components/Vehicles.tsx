import React, { FC } from 'react';
import { Entities } from './Entities';
import { entitiesHookFactory } from '../entities-hook-factory';
import { IVehicle } from '../models';

const useVehicles = entitiesHookFactory<IVehicle>('/vehicles');

export const Vehicles: FC = () => {
  const { entities, isLoading, isCacheLoading } = useVehicles();

  return (
    <Entities
      entities={entities}
      isLoading={isLoading}
      entitiesUrl="vehicles"
      isCacheLoading={isCacheLoading}
    />
  );
};
