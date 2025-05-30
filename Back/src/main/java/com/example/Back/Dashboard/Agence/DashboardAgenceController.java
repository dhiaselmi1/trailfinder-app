package com.example.Back.Dashboard.Agence;

import com.example.Back.Dashboard.Admin.DashboardService;
import com.example.Back.Dashboard.BarChartResponse;
import com.example.Back.Dashboard.EventDetails;
import com.example.Back.Dashboard.TotalCount;
import com.example.Back.Event.EventWithAgency;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/dashagence")
public class DashboardAgenceController {
    private final DashboardAgenceService dashboardAgenceService;
    @GetMapping(path = "event/{id}")
    public EventDetails getEvent(@PathVariable Integer id)  {

        return dashboardAgenceService.getNearestEventDetails(id);
    }
    @GetMapping("totalcount/{id}")
    public TotalCount getTotal (@PathVariable Integer id)
    {
        return  dashboardAgenceService.getTotalCounts(id);

    }
    @GetMapping("PieChart/{id}")
    public BarChartResponse PieChart (@PathVariable Integer id)
    {
        return   dashboardAgenceService.usersByGender(id);

    }
    @GetMapping("PieChart3/{id}")
    public BarChartResponse PieChart3 (@PathVariable Integer id)
    {
        return  dashboardAgenceService.usersByCountry(id);

    }
    @GetMapping("singlePieChart/{id}")
    public BarChartResponse  singlePieChart (@PathVariable Integer id)
    {
        return  dashboardAgenceService.singlePieChart(id);

    }
    @GetMapping("revenueTotal/{id}")
    public BarChartResponse revenueTotal (@PathVariable Integer id)
    {
        return  dashboardAgenceService.revenueParMois(id);

    }
}
