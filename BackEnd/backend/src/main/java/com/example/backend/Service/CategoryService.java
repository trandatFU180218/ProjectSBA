package com.example.backend.Service;

import com.example.backend.Entity.Category;
import com.example.backend.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repo;

    public List<Category> getAll() {
        return repo.findAll();
    }

    public Category findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Category updateById(Long id, Category cate) {
        Category oldCate = repo.findById(id).orElse(null);
        if (oldCate != null) {
            oldCate.setName(cate.getName());
            oldCate.setDescription(cate.getDescription());
            return repo.save(oldCate);
        }
        return null;
    }

    public Category create(Category cate){
        return repo.save(cate);
    }

    public void deleteById(Long id){
        repo.deleteById(id);
    }

    public Optional<Category> findByName(String name){
        return repo.findByName(name);
    }

}
