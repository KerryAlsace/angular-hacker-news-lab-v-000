function TopStoriesController(PostService, PostsService) {
  var ctrl = this;

  ctrl.posts = [];

  PostsService
    .getAllPosts()
    .then(function(res) {
      res.data.forEach(function(post) {
        PostService
          .getSinglePost(post)
          .then(function(res) {
            ctrl.posts.push(res.data);
          })
      });

    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);