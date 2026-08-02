package io.github.yogeshdofficial.freshfeeds_backend.web;

public class CategoryNotFoundException extends RuntimeException {

    public CategoryNotFoundException(String category) {
        super("Category not found: " + category);
    }
}
