import React from "react";
import styled from 'styled-components';

import { useForm } from "react-hook-form";
import axios from 'axios';

type FormData = {
  name: string;
  password: string;
  passwordConfirmation: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ name, password, passwordConfirmation }) => {
    console.log(name, password, passwordConfirmation);
    axios.post('http://localhost:3001/users', {
      name: name,
      password: password,
      password_confirmation: passwordConfirmation
    })
    .then((res) => {
      console.log(res)
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