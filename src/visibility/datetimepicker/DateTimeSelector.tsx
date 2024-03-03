import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Stack } from 'react-bootstrap';
import styled from 'styled-components';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ValidatedDateTimePickerProps {
  validation: string;
 }

export interface DateTimeSelectorProps extends ValidatedDateTimePickerProps {
  value: Value;
  onChange: (date: Value) => void;
}

const StyledLabel = styled.label`
  font-size: 65%;
  color: gray;
`;

const StyledErrorLabel = styled.label`
  font-size: 65%;
  color: red;
`;

const StyledDateTimePicker = styled(DateTimePicker)<ValidatedDateTimePickerProps>`
  color: ${props => props.validation ? 'red' : 'inherit'};
`

export const DateTimeSelector = ({
  value,
  onChange,
  validation,
}: DateTimeSelectorProps) => {
  return (
    <Stack>
      <StyledLabel>Select star gazing date</StyledLabel>
      <StyledDateTimePicker
        value={value}
        onChange={onChange}
        format={'y-MM-dd hh:mm:ss a'}
        validation={validation}
      />
      {validation && <StyledErrorLabel>{validation}</StyledErrorLabel>}
    </Stack>
  );
};
