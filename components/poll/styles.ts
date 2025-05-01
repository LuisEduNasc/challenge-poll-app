import styled from 'styled-components';

export const PollWrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

export const QuestionText = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
`;

export const AnswerOption = styled.div<{ selected?: boolean; highlight?: boolean }>`
  position: relative;
  background: ${({ selected }) => (selected ? '#f3f4f6' : '#f9fafb')};
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  border: 2px solid ${({ selected }) => (selected ? '#e5e7eb' : 'transparent')};
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AnswerBar = styled.div<{ highlight?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${({ highlight }) => (highlight ? '#a5f3fc' : '#e5e7eb')};
  border-radius: 8px;
  z-index: 0;
  transition: all 0.5s cubic-bezier(0, 0.75, 1, 0.02);

  inactive: {
    opacity: 0.5;
  }
  active: {
    opacity: 1;
  }
`;

export const AnswerText = styled.div`
  position: relative;
  z-index: 1;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SelectedCheck = styled.span`
  width: 25px;
  height: 25px;
  display: inline-block;
  background-image: url('/svg/check-circle.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  image-rendering: pixelated;
`;

export const VotePercentage = styled.div`
  position: relative;
  z-index: 1;
  font-weight: 500;
`;

export const TotalVotes = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;
