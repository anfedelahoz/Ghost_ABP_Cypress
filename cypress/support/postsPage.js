class PostsPage {
  getAllPosts() {
    return cy.get("span").contains("By");
  }

  getNewPostButton() {
    return cy.get("a").contains("New post");
  }
}

export default PostsPage;
