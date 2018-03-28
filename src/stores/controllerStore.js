
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
  setPlayList = async (playlist, type = PLAYLIST_PLAY_TYPE.REPLACE) => {

    if (type === PLAYLIST_PLAY_TYPE.ADD) {
      this.playlist = this.playlist.concat(playlist)
      return
    }
    this.playlist = playlist

  }

  /**
   * 播放
   */
  @action
  play = async (musicId) => {
    const music = this.playlist.find(p => p.id === musicId)
    this.music = music
    this.playing = true
  }
  /**
   * 暂停
   */
  @action
  pause = async () => {
    this.music = {}
    this.playing = false
  }

  /**
   * 切歌
   */
  @action
  cut = async (pass) => {
    const currentIndex = this.playlist.findIndex(p => p.src === this.music.src)
    let nextIndex = currentIndex + pass

    if (nextIndex >= this.playlist.length) {
      nextIndex = 0
    } else if (nextIndex < 0) {
      nextIndex = this.playlist.length - 1
    }
    this.music = this.playlist[nextIndex]

  }

  /**
   * 调整播放模式
   * 
   */
  @action
  toggle = async () => {
    self.playing = false;
  }


  /**
   * 设置进度
   */
  setProgress = (percent) => {
    
  }
}

export default new ControllerStore();
