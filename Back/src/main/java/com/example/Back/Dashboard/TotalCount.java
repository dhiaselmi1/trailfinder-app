package com.example.Back.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TotalCount {
    private long totalReservations;
    private long totalEvents;
    private long totalUsers;
}
