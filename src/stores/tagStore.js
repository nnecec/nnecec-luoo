import { observable, action, reaction, runInAction } from 'mobx';
import * as tagAPI from 'api/tagAPI'
class TagStore {
  @observable tagList = []

  @action
  fetchTagList = async (params) => {
    const tagList = await tagAPI.fetchTagList(params)
    runInAction(() => {
      console.log(tagList)
      this.tagList = tagList.data
    })
  }
}

export default new TagStore();
