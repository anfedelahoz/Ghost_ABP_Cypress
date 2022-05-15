class PostsPage {
  getAllPosts() {
    return cy.get("span").contains("By");
  }

  getNewPostButton() {
    return cy.get("a").contains("New post");
  }

  getRandomPost() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return cy
      .get("span")
      .contains("By")
      .then(($text) => {
        var text = $text.get(getRandomInt(0, $text.length));
        cy.wrap(text);
      });
  }
}

export default PostsPage;
