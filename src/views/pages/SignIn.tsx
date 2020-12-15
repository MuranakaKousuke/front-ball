import React from 'react';
import styled from 'styled-components';

import { useForm } from "react-hook-form";
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/user/actions';
import { useHistory } from 'react-router-dom';

type FormData = {
  name: string;
  password: string;
};

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ name, password }) => {
    axios.post('http://localhost:3001/login', {
      name: name,
      password: password,
    })
    .then((res) => {
      if (res.data.login) {
        dispatch(fetchUser(res.data))
        history.push('/')
        // localStrageに保存する
        const userStrage = res.data
        localStorage.setItem('user', JSON.stringify(userStrage));
      } else {
        console.log('ログインに失敗しました!')
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
        <button type="submit">ログイン</button>
      </form>
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  padding-top: 2em;
`