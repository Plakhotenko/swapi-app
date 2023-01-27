import React, { FC } from 'react';
import { IVehicle } from '../models';
import { Entity } from './Entity';
import { entityHookFactory } from '../entity-hook-factory';

const useVehicle = entityHookFactory<IVehicle>('/vehicles');

export const Vehicle: FC = () => {
  const { entity, isLoading, isCacheLoading } = useVehicle();

  return <Entity entity={entity} isLoading={isLoading} isCacheLoading={isCacheLoading} />;
};
