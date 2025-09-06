package com.inventory.inventoryservice.controller;

import com.inventory.inventoryservice.model.Inventory;
import com.inventory.inventoryservice.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin // Allow requests from frontend
public class InventoryController {
    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryService.findAll();
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Inventory> getInventoryByProductId(@PathVariable Long productId) {
        return inventoryService.findByProductId(productId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public Inventory updateInventory(@RequestBody Inventory inventory) {
        return inventoryService.save(inventory);
    }
}