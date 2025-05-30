package com.example.Back.Product;

import com.example.Back.partner.Partner;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepo productRepo;

    private static final String UPLOAD_DIR = "C:/Users/moham/OneDrive/Bureau/Spring Boot/Back/Back/src/main/resources/images/product";
    public void Delete(Integer id) {
        productRepo.deleteById(id);

    }
    public Product addProduct(ProductRequest productRequest)
    {

        Product p = Product.builder()
                .image(uploadImageToFileSystem(productRequest.getImage()))
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .status(productRequest.getStatus())
                .stock(productRequest.getStock())
                .build();
        if(productRepo.findByName(productRequest.getName()).isPresent())
            throw new IllegalStateException("Produit deja existant");
        productRepo.save(p);
        return p;
    }
    public String uploadImageToFileSystem(MultipartFile file) {
        String filePath=UPLOAD_DIR+ "/"+file.getOriginalFilename();


        try {
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        return file.getOriginalFilename();
    }
    public byte[] downloadImageFromFileSystem(String fileName) {

        String filePath=UPLOAD_DIR+ "/"+fileName;
        byte[] images = new byte[0];
        try {
            images = Files.readAllBytes(new File(filePath).toPath());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return images;
    }
    public Product updateProduct(Product p)
    {        Product product = productRepo.findById(p.getId()).get();
        product.setStock(p.getStock());
        product.setName(p.getName());
        product.setDescription(p.getDescription());
        product.setStatus(p.getStatus());
        product.setPrice(p.getPrice());
        productRepo.save(product);
        return product;
    }
    public List<Product> getAllProducts()
    {

        return productRepo.findAll();
    }
    public Product getById(Integer id)
    {
        Optional<Product> p = productRepo.findById(id);
        if(p.isPresent())
        {
            return  p.get();
        }
        throw new IllegalStateException("pas de produit  avec cet id");
    }
}
