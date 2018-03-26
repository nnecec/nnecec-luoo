
import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

import { PLAYLIST_PLAY_TYPE, PLAY_MODE } from 'utils/constant'

class ControllerStore {
  @observable playing = false;
  @observable mode = PLAY_MODE.LOOP;
  @observable playlist = [];
  @observable music = {};

  /**
   * 设置播放列表
   * type - 添加/替换
   */
  @action
  setPlayList = async (playList, type = PLAYLIST_PLAY_TYPE.REPLACE) => {

    if (type === PLAYLIST_PLAY_TYPE.ADD) {
      this.playList = this.playList.concat(playList)
    } else {
      this.playList = playList
    }
  }

  /**
   * 播放
   */
  @action
  play = async (musicId) => {
    const music = this.playList.find(p => p.id === musicId)
    this.music = music

  }

  /**
   * 切歌
   */
  @action
  next = async () => {

  }

  /**
   * 调整播放模式
   * 
   */
  @action
  toggle = async () => {
    self.playing = false;
  }
}

export default new ControllerStore();
