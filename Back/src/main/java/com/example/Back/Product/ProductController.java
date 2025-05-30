package com.example.Back.Product;

import com.example.Back.Agence.Agency;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.jsonwebtoken.io.IOException;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class ProductController {
    private final ProductService productService;
  @PostMapping(path="product")
    public Product add(@RequestParam("name") String name,
                       @RequestParam("stock") String stock,
                           @RequestParam("status") String status,
                           @RequestParam("price") String price,
                           @RequestParam("image") MultipartFile image,
                           @RequestParam("description") String description)
    {

        ProductRequest request = ProductRequest.builder()
                .name(name)
                .image(image)
                .stock(Integer.parseInt(stock))
                .description(description)
                .status(status)
                .price(Float.valueOf(price))

                .build();
        return   productService.addProduct(request);
    }
    @DeleteMapping(path = "product/{id}")
    public  void delete(@PathVariable  Integer id)  {
        productService.Delete(id);
    }

    @GetMapping("/product/image/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData= productService.downloadImageFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @PutMapping(path = "product")
    public Product updateEvent(@RequestBody Product p)
    {
        return  productService.updateProduct(p);
    }
    @GetMapping("product")
    public List<Product> GetAllEvents()
    {
        return  productService.getAllProducts();
    }
    @GetMapping(path = "product/{id}")
    public  Product getAgency(@PathVariable  Integer id)  {
        return productService.getById(id);
    }
}
