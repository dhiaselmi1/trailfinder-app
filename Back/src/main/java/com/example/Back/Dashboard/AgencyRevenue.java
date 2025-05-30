package com.example.Back.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AgencyRevenue {
    private String agency;
    private Map<String, Integer> revenue;
    public int getTotalRevenue() {
        return revenue.values().stream().mapToInt(Integer::intValue).sum();
    }
}
