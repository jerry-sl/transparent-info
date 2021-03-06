import { FunctionComponent, Component, ComponentProps } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import * as Fecha from 'fecha';
import { EventTitle } from './EventTitle';
import { EventTime } from './EventTime';
import { EventIcon } from './EventIcon';
import { Typography } from '@material-ui/core';
export interface WrapExtra {
  fileName: string;
  title: string;
  icon: string | Component;
}

type WrapItemProps = WrapExtra & {
  _ts: number;
  date: Date;
};

export default function withExtra(WrapComponent: any, extra: WrapExtra) {
  const { fileName } = extra;
  const date = Fecha.parse(fileName.split('.')[0], 'YYYY-MM-DD');
  const _ts = date?.valueOf();
  return [
    (props: any) => (
      <TimelineEvent
        title={<EventTitle fileName={extra.fileName}> {props.title || extra.title}</EventTitle>}
        createdAt={<EventTime date={date} />}
        icon={<EventIcon icon={props.icon || extra.icon} />}
      >
        <Typography>
          <WrapComponent {...extra} {...props} _ts={_ts} date={date} />
        </Typography>
      </TimelineEvent>
    ),
    {
      ...extra,
      date,
      _ts,
    },
  ];
}
