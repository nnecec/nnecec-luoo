import { observable, action, reaction, runInAction } from 'mobx'
import * as volAPI from 'api/volAPI'
class VolStore {
  @observable volList = []
  @observable volDetail = {}

  @action
  fetchVolList = async (params) => {
    try {
      const volList = await volAPI.fetchVolList(params)
      runInAction(() => {
        this.volList = volList.data
      })
    } catch (error) {

    }
  }

  @action
  fetchVolDetail = async (params) => {
    try {
      const volDetail = await volAPI.fetchVolDetail(params)
      console.log(volDetail)

      runInAction(() => {
        this.volDetail = volDetail.data
      })
    } catch (error) {

    }
  }

  @action
  resetVolDetail = () => this.volDetail = {}
}

export default new VolStore()
