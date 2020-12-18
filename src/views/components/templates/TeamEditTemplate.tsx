import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import axios from 'axios';
import { RAILS_SERVER } from '../../../utils/constants';

import { useDispatch } from 'react-redux';
import { teamState } from '../../../store/team/reducer';
import { updateTeam } from '../../../store/team/actions';

type TemplateProps = teamState;
type FormData = Pick<
  teamState,
  'name' | 'prefectureId' | 'town' | 'introduction'
>;

const TeamEditTemplate: React.FC<{teamState: TemplateProps}> = ({
  teamState,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: teamState.name,
      prefectureId: teamState.prefectureId,
      town: teamState.town,
      introduction: teamState.introduction,
    }
  });
  const onSubmit = handleSubmit(({ name ,prefectureId, town, introduction }) => {
    axios.patch(`${RAILS_SERVER}//teams/${teamState.id}`, {
      name: name,
      prefecture_id: prefectureId,
      town: town,
      introduction: introduction,
    })
    .then((res) => {
      if (res.data.results) {
        console.log('編集に成功しました!')
        dispatch(updateTeam(res.data.team))
        history.push('/')
        // localStrageに保存する
        const teamStrage = res.data.team
        localStorage.setItem('team', JSON.stringify(teamStrage));
      } else {
        console.log('編集に失敗しました!')
      }
    })
    .catch((error) => {
      console.log('エラーが発生しました')
    })
  });

  return(
    <Wrapper>
      <h1>マイチーム編集</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>チーム名</label>
          <input name="name" ref={register} />
        </div>
        <div>
          <label>都道府県</label>
          <input name="prefectureId" ref={register} />
        </div>
        <div>
          <label>地域</label>
          <input name="town" ref={register} />
        </div>
        <div>
          <label>チーム紹介</label>
          <input name="introduction" ref={register} />
        </div>
        <button type="submit">変更する</button>
      </form>
  </Wrapper>
  );
}

export default TeamEditTemplate;

const Wrapper = styled.div`
  padding-top: 2em;
`