package com.inventory.productservice.controller;

import com.inventory.productservice.model.Product;
import com.inventory.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin // Allow requests from frontend
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() { return productService.findAll(); }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) { return productService.findById(id); }

    @PostMapping
    public Product createProduct(@RequestBody Product product) { return productService.save(product); }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        return productService.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) { productService.deleteById(id); }
}