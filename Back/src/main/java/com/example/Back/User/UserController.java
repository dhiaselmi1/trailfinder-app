package com.example.Back.User;

import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class UserController {
    private final UserService userService;
@DeleteMapping(path ="user/{id}" )
public void delete(@PathVariable  Integer id)  {
     userService.deleteUser(id);
}
@GetMapping(path ="user" )
public List<User> GetAll()
{

    return  userService.getAllUsers();
}
@PutMapping(path = "user")
public User update(@RequestBody UpdateRequest user)
{
    return userService.updateUser(user);
}
@PostMapping(path ="user" )
public User add(@RequestParam("image") MultipartFile file,
                @RequestParam("first_name") String first_name,
                @RequestParam("last_name") String last_name,
                @RequestParam("email") String email,
                @RequestParam("password") String password,
                @RequestParam("phone_number") String phoneNumber,
                @RequestParam("country") String country,
                @RequestParam("role_id") String role_id
                 )
{
    UserRequest user = UserRequest.builder().
    photo(file)
            .first_name(first_name)
            .phone_number(phoneNumber)
            .last_name(last_name)
            .email(email)
            .password(password)
            .country(country)
            .role_id(Integer.valueOf(role_id))
            .build();


    return userService.addUser(user);
}
    @GetMapping("/user/image/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData=userService.downloadImageFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);

    }
    @GetMapping(path = "user/{id}")
    public User getUser(@PathVariable  Integer id)  {
        return userService.getUser(id);
    }
    @PutMapping(path = "user/image")
    public void updateLogo( @RequestParam("image") MultipartFile file,@RequestParam("id") String id)
    {
        userService.updateImageToFileSystem(file,Integer.parseInt(id));
    }
}
