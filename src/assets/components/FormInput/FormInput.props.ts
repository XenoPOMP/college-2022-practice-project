import React from 'react';

export interface FormInputProps {
  label: string;
  placeholder?: string;
  useState: {
    state: string,
    setState: React.Dispatch<string>,
  };
  type: 'text' | 'email' | 'textarea';
}
