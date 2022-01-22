import React from 'react';
import styled from 'styled-components';

const ChatDayBar = () => {
  return (
    <DayBarContainer>
      <DayButton>1월 22일 토요일</DayButton>
      <DayBarDivider />
    </DayBarContainer>
  );
};

const DayBarContainer = styled.div`
  width: 100%;
  background: transparent;
  padding: 20px 0;
  text-align: center;
`;

const DayBarDivider = styled.div`
  left: 0;
  right: 0;
  border-top: 1px solid rgba(var(--sk_foreground_low_solid, 221, 221, 221), 1);
  border-bottom: 0;
  margin: 0 0 -1px;
  top: -16px;
  position: relative;
  z-index: -1;
`;

const DayButton = styled.button`
  font-size: 13px;
  height: 28px;
  line-height: 27px;
  padding: 0 16px;
  z-index: 2;
  pointer-events: all;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  background: #fff;
  border: 0;
  font-weight: 700;
`;

export default ChatDayBar;
