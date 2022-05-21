class TagsPage {

    getTagsPage() {

        return cy.contains('Tags')
    }

    getNewTagButton() {
        return cy.get("a").contains("New tag");
    }

    getTagName() {
        return cy.get('[name="name"]');
    }

    getTagSlug() {
        return cy.get('[name="slug"]');
    }

    getTagDescription() {
        return cy.get('[name="description"]');
    }

    getTagColor() {
        return cy.get('[placeholder="15171A"]');
    }

    getSaveTagButton() {
        return cy.get('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    }

    getTag() {
        return cy.get("span").contains("posts");
    }
}

export default TagsPage;