import { observable, action, reaction } from 'mobx';
class CommonStore {

  @observable viewHeight;
  @observable locale = 'en-US';

  @action
  setViewHeight = (height) => {
    this.viewHeight = height;
  }

  @action
  setLocale = (lang) => {
    this.locale = lang;
  }
}

export default new CommonStore();
