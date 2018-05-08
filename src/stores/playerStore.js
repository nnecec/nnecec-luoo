
import { observable, action, computed } from 'mobx'
import { ipcRenderer } from 'electron'

import { PLAYLIST_PLAY_TYPE, PLAY_MODE } from 'utils/constant'
import storage from 'utils/storage'



class PlayerStore {
  @observable volume = 0.5
  @observable muted = false
  @observable progress = 0
  @observable currentTime = 0
  @observable duration = 0

  @action
  init = async () => {
    this.setVolume(await storage.get('volume'))
  }

  /**
   * 设置音量
   */
  @action
  setVolume = (percent) => {
    this.volume = percent
    storage.set('volume', percent)
    ipcRenderer.send('player-volume-change', {
      volume: percent
    });
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

export default new PlayerStore()
