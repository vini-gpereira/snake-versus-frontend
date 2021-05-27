import React, { ChangeEvent, FC } from 'react';
import TextInput, { TextInputProps } from './text';
import NumberInput, { NumberInputProps } from './number';
import CheckboxInput, { CheckboxInputProps } from './checkbox';

export interface InputProps {
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLElement>) => void;
  className?: string;
}

type InputTypes = TextInputProps | NumberInputProps | CheckboxInputProps;

const Input: FC<InputProps> = (props): JSX.Element => {
  const inputs: Record<string, React.FC<InputTypes>> = {
    text: TextInput,
    number: NumberInput,
    checkbox: CheckboxInput,
  };

  const Input = inputs[props.type] ? inputs[props.type] : TextInput;

  return <Input {...props} />;
};

export default Input;
