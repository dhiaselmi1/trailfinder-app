package com.example.Back.Agence.gestion;

import com.example.Back.Agence.Agency;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AgencyWithEvent {
    private Agency agency;
    private String poster;

}
