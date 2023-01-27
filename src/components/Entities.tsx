import React, { FC } from 'react';
import { Link, List, ListItem, LinearProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Loader } from './Loader';
import { IPerson } from '../models';

const getIdFromUrl = (url: IPerson['url']) => {
  const substrings = url.split('/');
  return substrings[substrings.length - 2];
};

export const Entities: FC<{
  entities: Record<string, any>[];
  isLoading: boolean;
  isCacheLoading: boolean;
  entitiesUrl: string;
}> = ({ entities, isLoading, isCacheLoading, entitiesUrl }) =>
  isLoading ? (
    <Loader />
  ) : (
    <div className="p-relative">
      {isCacheLoading && <LinearProgress className="linear-loader" />}
      <List>
        {entities.map(({ url, name, title }) => (
          <ListItem key={url} sx={{ justifyContent: 'center' }}>
            <Link
              component={RouterLink}
              to={`/${entitiesUrl}/${getIdFromUrl(url)}`}
              variant="body2"
            >
              {name || title}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
