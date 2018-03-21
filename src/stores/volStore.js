import { observable, action, reaction, runInAction } from 'mobx';
import * as volAPI from 'api/volAPI'
class VolStore {
  @observable volList = []

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
}

export default new VolStore();
