import React from 'react';
import styled from 'styled-components';

import { useForm } from "react-hook-form";
import axios from 'axios';
import { RAILS_SERVER } from '../../../utils/constants';

import { useDispatch } from 'react-redux';
import { changeLogin } from '../../../store/login/actions';
import { fetchTeam } from '../../../store/teams/actions';
import { useHistory } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const SignInTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ email, password }) => {
    axios.post(`${RAILS_SERVER}/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data.results) {
        const team = res.data.team
        dispatch(fetchTeam(team))
        dispatch(changeLogin(team.id))
        history.push('/')
        // localStrageに保存する
        localStorage.setItem('team', JSON.stringify(team));
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
          <label>メールアドレス</label>
          <input name="email" ref={register} />
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

export default SignInTemplate;

const Wrapper = styled.div`
  padding-top: 2em;
`