
import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

import { PLAYLIST_PLAY_TYPE, PLAY_MODE } from 'utils/constant'

class ControllerStore {
  @observable volume = 0.1;

  /**
   * 设置音量
   * type - 添加/替换
   */
  @action
  setVolume = (percent) => {

    this.volume = percent


  }

}

export default new ControllerStore();
