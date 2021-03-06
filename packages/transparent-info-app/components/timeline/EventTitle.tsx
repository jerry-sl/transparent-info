import { FunctionComponent } from 'react';
import { Typography, Tooltip } from '@material-ui/core';
import { EditOutlined as EditIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { projectUrl } from '../../src/consts';
import { getEditUrl } from '../Github';

interface Props {
  fileName: string;
}
export const EventTitle: FunctionComponent<Props> = ({ children, fileName }) => {
  if (!children) {
    throw new Error('title must set');
  }

  const href = getEditUrl(`timeline/${fileName}`);
  return (
    <>
      <Typography component="span"> {children}</Typography>
      <Tooltip title="点我编辑此日事件">
        <IconButton>
          <a href={href} target="_blank">
            <EditIcon color="primary" />
          </a>
        </IconButton>
      </Tooltip>
    </>
  );
};
