import React, { FC } from 'react';
import { List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import { Loader } from './Loader';

export const Entity: FC<{
  entity: Record<string, any>;
  isLoading: boolean;
  isCacheLoading: boolean;
}> = ({ entity, isLoading, isCacheLoading }) =>
  isLoading ? (
    <Loader />
  ) : (
    <div className="p-relative">
      {isCacheLoading && <LinearProgress className="linear-loader" />}
      <List>
        {Object.entries(entity).map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText>{`${key}: ${value}`}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
