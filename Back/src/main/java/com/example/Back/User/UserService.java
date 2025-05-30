package com.example.Back.User;

import com.example.Back.Role.Role;
import com.example.Back.Role.RoleRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;

    private static final String UPLOAD_DIR = "C:/Users/moham/OneDrive/Bureau/Spring Boot/Back/Back/src/main/resources/images/user";
    public void deleteUser(Integer id) {
        userRepo.deleteById(id);
    }
    public User addUser(UserRequest u)
    {u.setPassword(encode(u.getPassword()));
        Role r = roleRepo.findById(u.getRole_id()).get();
        User user = User.builder()
                .email(u.getEmail())
                .password(u.getPassword())
                .photo(uploadImageToFileSystem(u.getPhoto()))
                .last_name(u.getLast_name())
                .first_name( u.getFirst_name())
                .country( u.getCountry())
                .phone_number( u.getPhone_number())
                .role(r)
                .build();
        if(userRepo.findByEmail(u.getEmail()).isPresent())
           throw new IllegalStateException("utilisateur deja existant");
        userRepo.save(user);
        return user;
    }
public User updateUser(UpdateRequest u)
{        Optional<User> user = userRepo.findByEmail(u.getEmail());
if(user.isPresent())
{user.get().setFirst_name(u.getFirst_name());
user.get().setLast_name(u.getLast_name());
user.get().setEmail(u.getEmail());
user.get().setCountry(u.getCountry());
user.get().setPhone_number(u.getPhone_number());

userRepo.save(user.get());
    return user.get();
}
    throw new IllegalStateException("pas d'utilisateur  avec cet email");

}
public List<User> getAllUsers()
{

    return userRepo.findAll();
}
    public String encode(String a)
    {
        return  passwordEncoder.encode(a);}
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
public User getUser(Integer id)
{

    Optional<User> u = userRepo.findById(id);
    if(u.isPresent())
        return  u.get();
    throw new IllegalStateException("utilisateur introuvable");
}
    public void updateImageToFileSystem(MultipartFile file,Integer id)
    {
        User u =  userRepo.findById(id).get();
        u.setPhoto(uploadImageToFileSystem(file));
        userRepo.save(u);

    }
}
