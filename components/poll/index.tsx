import * as React from 'react';

import { QandAsDocument, QandA, Answer } from '@/types';
import {
  PollWrapper,
  QuestionText,
  AnswerOption,
  AnswerBar,
  AnswerText,
  VotePercentage,
  TotalVotes,
  SelectedCheck,
} from './styles';

type Props = {
  qandas: QandAsDocument;
};

export const Poll: React.FC<Props> = ({ qandas }) => {
  const [question, setQuestion] = React.useState<QandA | null>(null);
  const [hasVoted, setHasVoted] = React.useState(false);

  React.useEffect(() => {
    const questions = qandas.questions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  }, [qandas]);

  if (!question) return null;

  const handleSelectOption = (selectedAnswer: Answer) => {
    if (!question || hasVoted) return;

    const answers = question.answers.map(answer => {
      if (answer.text === selectedAnswer.text) {
        return {
          ...answer,
          selected: true,
          votes: answer.votes + 1,
        };
      }
      return {
        ...answer,
        selected: false,
      };
    });

    setQuestion({ ...question, answers });
    setHasVoted(true);
  };

  const totalVotes = question.answers.reduce((sum, a) => sum + a.votes, 0);

  const maxPercent = Math.max(
    ...question.answers.map(a => (totalVotes ? Math.round((a.votes / totalVotes) * 100) : 0))
  );

  return (
    <PollWrapper>
      <QuestionText>{question.question.text}</QuestionText>
      {question.answers.map((answer, index) => {
        const percent = totalVotes ? Math.round((answer.votes / totalVotes) * 100) : 0;
        const isSelected = answer.selected;
        const isTop = percent === maxPercent;

        return (
          <AnswerOption
            key={index}
            selected={isSelected}
            highlight={isTop}
            onClick={() => handleSelectOption(answer)}
          >
            <AnswerBar style={{ width: `${percent}%` }} highlight={isTop} />
            <AnswerText>
              <span>{answer.text}</span>
              {isSelected && <SelectedCheck />}
            </AnswerText>
            <VotePercentage>{percent}%</VotePercentage>
          </AnswerOption>
        );
      })}
      <TotalVotes>{totalVotes} votes</TotalVotes>
    </PollWrapper>
  );
};
