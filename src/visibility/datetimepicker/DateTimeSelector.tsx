import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Stack } from 'react-bootstrap';
import styled from 'styled-components';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface DateTimeSelectorProps {
  value: Value;
  onChange: (date: Value) => void;
}

const StyledLabel = styled.label`
  font-size: 65%;
  color: gray;
`;

export const DateTimeSelector = ({
  value,
  onChange,
}: DateTimeSelectorProps) => {
  return (
    <Stack>
      <StyledLabel>Select star gazing date</StyledLabel>
      <DateTimePicker
        value={value}
        onChange={onChange}
        format={'y-MM-dd hh:mm:ss a'}
      />
    </Stack>
  );
};
