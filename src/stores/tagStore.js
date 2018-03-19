import { observable, action, reaction, runInAction } from 'mobx';
import * as tagAPI from '../api/tagAPI'
class TagStore {
  @observable tagList = []

  @action
  fetchTagList = async () => {
    const tagList = await tagAPI.fetchTagList()
    runInAction(() => {
      console.log(tagList)
      this.tagList = tagList.data
    })
  }

  test = () => { }
}

export default new TagStore();
