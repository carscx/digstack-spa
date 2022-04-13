import { action, makeObservable, observable, runInAction } from 'mobx'
import AsyncStore from 'stores/AsyncStore'
import { PostService } from 'services'

class PostStore extends AsyncStore {
  constructor() {
    super()
    this.postService = new PostService()
    this.posts = []

    makeObservable(this, {
      // observables
      posts: observable,
      // actions
      changePosts: action,
    })
  }

  changePosts(posts) {
    this.posts = posts
  }

  async getPosts() {
    this.preRequest()
    try {
      await this.postService.getPosts().then((data) => this.changePosts(data.data))

      runInAction(() => {
        this.onSuccessRequest()
      })
      return true
    } catch (e) {
      runInAction(() => {
        this.onErrorRequest(e)
      })

      return false
    }
  }
}

export default PostStore
