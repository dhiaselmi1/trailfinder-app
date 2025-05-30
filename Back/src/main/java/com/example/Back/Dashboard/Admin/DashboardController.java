package com.example.Back.Dashboard.Admin;

import com.example.Back.Dashboard.AgencyRevenue;
import com.example.Back.Dashboard.BarChartResponse;
import com.example.Back.Dashboard.TotalCount;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/dash")
public class DashboardController {
private final DashboardService dashboardService;
    @GetMapping("barchart")
    public BarChartResponse getData ()
    {
        return  dashboardService.barchChart();

    } @GetMapping("singlebarchart")
    public BarChartResponse  getsingleBar ()
    {
        return  dashboardService.singlebarchChart();

    }
    @GetMapping("resultchart")
    public BarChartResponse  getResult ()
    {
        return  dashboardService.resultChart();

    }@GetMapping("radarchart")
    public BarChartResponse  getRadar ()
    {
        return  dashboardService.radaChart();

    }
    @GetMapping("singlePieChart")
    public BarChartResponse  singlePieChart ()
    {
        return  dashboardService.singlePieChart();

    }
    @GetMapping("PieChart3")
    public BarChartResponse PieChart3 ()
    {
        return  dashboardService.usersByCountry();

    }
    @GetMapping("PieChart")
    public BarChartResponse PieChart ()
    {
        return  dashboardService.usersByGender();

    }
    @GetMapping("revenueTotal")
    public BarChartResponse revenueTotal ()
    {
        return  dashboardService.revenueParMois();

    }
    @GetMapping("topagencies")
    public List<AgencyRevenue> Top3AgenciesLastYear ()
    {
        return  dashboardService.getTop3AgenciesLastYear();

    }
    @GetMapping("totalcount")
    public TotalCount getTotal ()
    {
        return  dashboardService.getTotalCounts();

    }
}
