import { observable, action, reaction, runInAction } from 'mobx';
import * as tagAPI from '../api/tagAPI'
export class TagStore {

  @action
  fetchTagList = async () => {
    const tagList = await tagAPI.fetchTagList()

    runInAction(() => {
      this.state = "done"
    })
  }
}

export default new TagStore();
