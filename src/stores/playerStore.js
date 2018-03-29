
import { observable, action, computed } from 'mobx';
import { ipcRenderer } from 'electron';

import { PLAYLIST_PLAY_TYPE, PLAY_MODE } from 'utils/constant'

class PlayerStore {
  @observable volume = 0.1;
  @observable muted = false;
  @observable progress = 0;
  @observable currentTime = 0;
  @observable duration = 0;

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
  setProgress = (currentTime, duration) => {
    this.currentTime = currentTime
    this.duration = duration
    this.progress = currentTime / duration
  }


}

export default new PlayerStore();
