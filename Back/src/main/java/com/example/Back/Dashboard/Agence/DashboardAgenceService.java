package com.example.Back.Dashboard.Agence;


import com.example.Back.Agence.AgencyRepo;
import com.example.Back.Dashboard.BarChartResponse;
import com.example.Back.Dashboard.EventDetails;
import com.example.Back.Dashboard.TotalCount;
import com.example.Back.Event.Event;
import com.example.Back.Event.EventRepo;

import com.example.Back.Reservation.Reservation;
import com.example.Back.Reservation.ReservationRepo;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.time.YearMonth;
import java.time.format.TextStyle;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
@RequiredArgsConstructor
public class DashboardAgenceService {
    private final AgencyRepo agencyRepo;
    private final EventRepo eventRepo;
    private final UserRepo userRepo;
    private final ReservationRepo reservationRepo;
    public EventDetails getNearestEventDetails(Integer agencyId) {
        List<Event> events = eventRepo.findUpcomingEventsByAgency(agencyId);
        if (!events.isEmpty()) {
            Event nearestEvent = events.get(0);
            Long reservationCount = reservationRepo.countByEvent(nearestEvent);
            return new EventDetails(nearestEvent.getName(), reservationCount.intValue(), nearestEvent.getCapacity());
        }
        return null;
    }
    public BarChartResponse singlePieChart(Integer agencyId) {
        List<Reservation> reservations = reservationRepo.findByEventAgencyId(agencyId);
        Map<String, Integer> ageCount = new HashMap<>();

        for (Reservation reservation : reservations) {
            User user = reservation.getUser();
            LocalDate birthdate = user.getBirthDate();
            int age = Period.between(birthdate, LocalDate.now()).getYears();
            String ageGroup;

            if (age >= 18 && age <= 20) {
                ageGroup = "moins de 20";
            } else if (age > 20 && age <= 30) {
                ageGroup = "entre 20 et 30";
            } else if (age > 30 && age <= 40) {
                ageGroup = "entre 30 et 40";
            } else if (age > 40 && age <= 50) {
                ageGroup = "entre 40 et 50";
            }else if (age > 50 && age <= 60) {
                ageGroup = "entre 50 et 60";
            } else {
                ageGroup = "plus de 60";
            }

            if (ageCount.containsKey(ageGroup)) {
                ageCount.put(ageGroup, ageCount.get(ageGroup) + 1);
            } else {
                ageCount.put(ageGroup, 1);
            }
        }

        BarChartResponse response = new BarChartResponse();
        response.setCategories(ageCount.keySet().toArray(new String[0]));
        response.setData(ageCount.values().stream().mapToInt(i -> i).toArray());

        return response;
    }
    public BarChartResponse usersByCountry(Integer agencyId) {
        List<Reservation> reservations = reservationRepo.findByEventAgencyId(agencyId);
        Map<String, Integer> countryCount = new HashMap<>();

        for (Reservation reservation : reservations) {
            User user = reservation.getUser();
            String country = user.getCountry();

            if (countryCount.containsKey(country)) {
                countryCount.put(country, countryCount.get(country) + 1);
            } else {
                countryCount.put(country, 1);
            }
        }

        BarChartResponse response = new BarChartResponse();
        response.setCategories(countryCount.keySet().toArray(new String[0]));
        response.setData(countryCount.values().stream().mapToInt(i -> i).toArray());

        return response;
    }
    public TotalCount getTotalCounts(Integer agencyId) {
        long totalReservations = reservationRepo.countByEventAgencyId(agencyId);
        long totalEvents = eventRepo.countByAgencyId(agencyId);
        long totalUsers = userRepo.countByReservationsEventAgencyId(agencyId);

        return new TotalCount(totalReservations, totalEvents, totalUsers);
    }
    public BarChartResponse usersByGender(Integer agencyId) {
        List<Reservation> reservations = reservationRepo.findByEventAgencyId(agencyId);        Map<String, Integer> genderCount = new HashMap<>();

        for (Reservation reservation : reservations) {
            User user = reservation.getUser();
            String gender = user.getGender();
            String genderLabel = "";

            if (gender.equals("H")) {
                genderLabel = "Homme";
            } else if (gender.equals("F")) {
                genderLabel = "Femme";
            }

            if (genderCount.containsKey(genderLabel)) {
                genderCount.put(genderLabel, genderCount.get(genderLabel) + 1);
            } else {
                genderCount.put(genderLabel, 1);
            }
        }

        BarChartResponse response = new BarChartResponse();
        response.setCategories(genderCount.keySet().toArray(new String[0]));
        response.setData(genderCount.values().stream().mapToInt(i -> i).toArray());

        return response;
    }
    public BarChartResponse revenueParMois(Integer agencyId) {
        List<Reservation> r = reservationRepo.findByEventAgencyId(agencyId);        Map<String, Integer> genderCount = new HashMap<>();

        Map<String, Integer> revenuePerMonth = new HashMap<>();

        // Initialisez tous les mois à 0
        for (Month month : Month.values()) {
            revenuePerMonth.put(month.getDisplayName(TextStyle.FULL, Locale.FRANCE), 0);
        }

        for (Reservation res : r) {
            int ticketPrice = res.getEvent().getTicket_price();
            YearMonth reservationDate = YearMonth.from(res.getReservation_date());

            // Vérifiez si la réservation a été faite au cours des 12 derniers mois
            if (reservationDate.isAfter(YearMonth.now().minusMonths(12))) {
                String month = reservationDate.getMonth().getDisplayName(TextStyle.FULL, Locale.FRANCE);

                revenuePerMonth.put(month, revenuePerMonth.get(month) + ticketPrice);
            }
        }

        // Créez une liste de mois de mai à avril
        List<String> months = Stream.of(Month.values())
                .map(month -> month.getDisplayName(TextStyle.FULL, Locale.FRANCE))
                .collect(Collectors.toList());
        Collections.rotate(months, -months.indexOf("mai"));

        // Triez les catégories et les données en fonction de l'ordre des mois
        String[] sortedCategories = months.stream()
                .filter(revenuePerMonth::containsKey)
                .toArray(String[]::new);
        int[] sortedData = Arrays.stream(sortedCategories)
                .mapToInt(revenuePerMonth::get)
                .toArray();

        BarChartResponse response = new BarChartResponse();
        response.setCategories(sortedCategories);
        response.setData(sortedData);

        return response;
    }

}
