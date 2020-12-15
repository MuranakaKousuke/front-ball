import React from "react";
import styled from 'styled-components';

import { useForm } from "react-hook-form";
import axios from 'axios';

import { useHistory } from 'react-router-dom';

type FormData = {
  name: string;
  password: string;
  passwordConfirmation: string;
};

const SignUp = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ name, password, passwordConfirmation }) => {
    axios.post('http://localhost:3001/users', {
      name: name,
      password: password,
      password_confirmation: passwordConfirmation
    })
    .then((res) => {
      if (res.data.results) {
        console.log('登録に成功しました!')
        history.push('login/new')
      } else {
        console.log('登録に失敗しました!')
      }
    })
    .catch((error) => {
      console.log('エラーが発生しました')
    })
  });

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <div>
          <label>ユーザーネーム</label>
          <input name="name" ref={register} />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" ref={register} />
        </div>
        <div>
          <label>パスワード(確認)</label>
          <input name="passwordConfirmation" ref={register} />
        </div>
        <button type="submit">登録</button>
      </form>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  padding-top: 2em;
`