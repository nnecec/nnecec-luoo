import { observable, action, reaction, runInAction } from 'mobx'
import * as volAPI from 'api/volAPI'
class VolStore {
  @observable page = 1
  @observable volList = []
  @observable volDetail = {}
  @observable volDetailStyle = {
    bg: '#fff',
    color: '#333'
  }
  @observable isLoading = false

  @action
  fetchVolList = async (params) => {
    try {
      this.isLoading = true
      const volList = await volAPI.fetchVolList(params)
      runInAction(() => {
        this.volList = volList.data
        this.isLoading = false
        this.page = params.page || 1
      })
    } catch (error) {

    }
  }

  @action
  fetchVolDetail = async (params) => {
    try {
      this.isLoading = true
      const volDetail = await volAPI.fetchVolDetail(params)

      runInAction(() => {
        this.volDetail = volDetail.data
        this.isLoading = false

        this.volDetailStyle.bg = this.volDetail.swatches && (this.volDetail.swatches.LightVibrant || this.volDetail.swatches.LightMuted || this.volDetail.swatches.Muted)

        this.volDetailStyle.color = this.volDetail.swatches && (this.volDetail.swatches.DarkVibrant || this.volDetail.swatches.DarkMuted)
      })
    } catch (error) {

    }
  }

  @action
  resetVolDetail = () => {

    this.volDetail = {}
    this.volDetailStyle = {
      bg: '#fff',
      color: '#333'
    }
  }
}

export default new VolStore()
