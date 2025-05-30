package com.example.Back.Agence;

import com.example.Back.Event.Event;
import com.example.Back.Role.Role;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Agency
        implements UserDetails
{
    @Id
    @GeneratedValue
    private Integer id;
    private String representative;
    private String agency;
    //@Email(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    private String email;
    private String phone_number;
    private String password;
    private String description ;
    private String logo;
    private String activity;
    private String country;
    @ManyToOne
    @JoinColumn(name = "role_id")
    @JsonBackReference
    private Role role;
   private boolean isEnabled;
   private boolean isApproved = false ;
    @OneToMany(mappedBy = "agency",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Event> events = new ArrayList<>();
//    @OneToMany(mappedBy = "agency",cascade = CascadeType.ALL)
//    @JsonManagedReference
//    private List<ConfirmationToken> token = new ArrayList<>();

    @Override
    public String getPassword() {
        return password;
    }
    @Override
    public String getUsername() {
        return agency;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
    @Override

    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority
                = new SimpleGrantedAuthority(role.getName());

        return Collections.singletonList(authority);
    }
}
