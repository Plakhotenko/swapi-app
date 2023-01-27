import React, { FC } from 'react';
import { Entities } from './Entities';
import { entitiesHookFactory } from '../entities-hook-factory';
import { IPerson } from '../models';
import { useSelector, useDispatch } from '../state-manager';
import { setPeople, setLoading, setCacheLoading } from '../store/people/reducers';

const usePeople = () => {
  const { entities, isLoading, isCacheLoading } = entitiesHookFactory<IPerson>('/people')();
  const dispatch = useDispatch();
  dispatch(setPeople(entities));
  dispatch(setLoading(isLoading));
  dispatch(setCacheLoading(isCacheLoading));
};

export const People: FC = () => {
  usePeople();

  const { entities, loading, cacheLoading } = useSelector((store) => store.people);

  return (
    <Entities
      entities={entities}
      isLoading={loading}
      entitiesUrl="people"
      isCacheLoading={cacheLoading}
    />
  );
};
