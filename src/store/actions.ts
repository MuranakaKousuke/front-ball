import { LoginActionsTypes } from './login/actions';
import { TeamsActionsTypes } from './teams/actions';

type AppActions =
  LoginActionsTypes |
  TeamsActionsTypes

export default AppActions;