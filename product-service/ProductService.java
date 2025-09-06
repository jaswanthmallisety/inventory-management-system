package com.inventory.productservice.service;

import com.inventory.productservice.model.Product;
import com.inventory.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() { return productRepository.findAll(); }
    public Product findById(Long id) { return productRepository.findById(id).orElse(null); }
    public Product save(Product product) { return productRepository.save(product); }
    public void deleteById(Long id) { productRepository.deleteById(id); }
}