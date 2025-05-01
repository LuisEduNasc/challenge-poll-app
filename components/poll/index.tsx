import * as React from 'react';

import { QandAsDocument } from '@/types';
import { PollWrapper } from './styles';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

export const Poll = ({ qandas }: Props) => {
  console.log('questions and answers: ', qandas);
  return <PollWrapper>The Poll implementation goes here</PollWrapper>;
};
