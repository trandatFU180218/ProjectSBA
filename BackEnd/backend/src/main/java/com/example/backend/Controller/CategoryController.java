package com.example.backend.Controller;

import com.example.backend.Entity.Category;
import com.example.backend.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;


    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAll();
    }


    @GetMapping("/{id}")
    public Category getCategory(@PathVariable Long id) {
        return categoryService.findById(id);
    }


    @PostMapping
    public Category createCategory(@RequestBody Category category) {
        return categoryService.create(category);
    }


    @PutMapping("/{id}")
    public Category updateCategory(
            @PathVariable Long id,
            @RequestBody Category category) {

        return categoryService.updateById(id, category);
    }


    @DeleteMapping("/{id}")
    public String deleteCategory(@PathVariable Long id) {

        categoryService.deleteById(id);

        return "Category deleted successfully";
    }


}
