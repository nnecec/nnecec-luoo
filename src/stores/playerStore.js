
import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

import { PLAYLIST_PLAY_TYPE, PLAY_MODE } from 'utils/constant'

class PlayerStore {
  @observable volume = 0.1;
  @observable muted = false;
  @observable progress = 0;

  /**
   * 设置音量
   */
  @action
  setVolume = (percent) => {
    this.volume = percent
  }

  /**
   * 设置播放进度
   */
  @action
  setProgress = (percent) => {
    this.progress = percent
  }



}

export default new PlayerStore();
