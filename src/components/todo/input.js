import React, { useState } from 'react';
import styled from 'styled-components';

import LabelRow from '../molecules/LabelRow';
import { Button, MAIN_COLOR } from '../atoms';

export default function TodoInput(props) {
  const { onSubmit } = props;
  const [form, setForm] = useState({ time: '', content: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'time' ? value.slice(0, 8) : value,
    });
  };

  const isValidForm = (form) => {
    if (form.time.length == 0 || form.content == 0) {
      alert('모든 항목을 입력해주세요!');
      return false;
    }
    if (form.time.length !== 8) {
      alert('날짜를 올바른 형식으로 입력해주세요!');
      return false;
    }
    return true;
  };

  const initForm = () => {
    setForm({ time: '', content: '' });
  };

  const handleSubmit = () => {
    if (!isValidForm(form)) {
      return;
    }

    onSubmit(form);
    alert('입력되었습니다!');
    initForm();
  };

  return (
    <FormWrapper>
      <LabelRow label='시간'>
        <Input
          type='number'
          value={form.time}
          name='time'
          maxLength='8'
          onChange={handleFormChange}
          placeholder='날짜를 입력하세요 (ex.20200404)'
        />
      </LabelRow>
      <LabelRow label='TODO'>
        <TextArea
          value={form.content}
          name='content'
          onChange={handleFormChange}
          resize='none'
          placeholder='할 일을 입력하세요'
        />
      </LabelRow>
      <Button onClick={handleSubmit}>등록</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  flex: 1;
  border: solid 1px black;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;

const Input = styled.input`
  width: 80%;
  border: solid 1px ${MAIN_COLOR};
  padding: 0.5rem 0.8rem;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 30vh;
  border: solid 1px ${MAIN_COLOR};
  padding: 0.5rem 0.8rem;
  resize: none;
`;
