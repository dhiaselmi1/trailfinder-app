package com.example.Back.Dashboard.Admin;

import com.example.Back.Agence.Agency;
import com.example.Back.Agence.AgencyRepo;
import com.example.Back.Dashboard.AgencyRevenue;
import com.example.Back.Dashboard.BarChartResponse;
import com.example.Back.Dashboard.TotalCount;
import com.example.Back.Event.Event;
import com.example.Back.Event.EventRepo;
import com.example.Back.Reservation.Reservation;
import com.example.Back.Reservation.ReservationRepo;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final AgencyRepo agencyRepo;
    private final EventRepo eventRepo;
    private final UserRepo userRepo;
    private final ReservationRepo reservationRepo;

    public BarChartResponse barchChart() {
        List<Agency> agencies = agencyRepo.findAll();
        Map<String, Integer> countryCount = new HashMap<>();

        for (Agency agency : agencies) {
            String country = agency.getCountry();
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
    public BarChartResponse resultChart() {
        List<Event> events = eventRepo.findAll();
        Map<String, Integer> categoryCount = new HashMap<>();
        for (Event event : events) {
            String category = event.getCategory();
            if (categoryCount.containsKey(category)) {
                categoryCount.put(category, categoryCount.get(category) + 1);
            } else {
                categoryCount.put(category, 1);
            }
        }

        BarChartResponse response = new BarChartResponse();
        response.setCategories(categoryCount.keySet().toArray(new String[0]));
        response.setData(categoryCount.values().stream().mapToInt(i -> i).toArray());

        return response;
    }
    public BarChartResponse radaChart() {
        List<Event> events = eventRepo.findAll();
        Map<String, Integer> monthCount = new LinkedHashMap<>();
        DateTimeFormatter monthFormatter = DateTimeFormatter.ofPattern("MMMM", Locale.FRENCH);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM");

        // Initialiser tous les mois à zéro
        for (int i = 1; i <= 12; i++) {
            String month = YearMonth.of(2020, i).format(monthFormatter);
            monthCount.put(month, 0);
        }

        for (Event event : events) {
            String month = event.getDate().format(formatter);
            String monthName = YearMonth.parse(month).format(monthFormatter);
            monthCount.put(monthName, monthCount.get(monthName) + 1);
        }

        BarChartResponse response = new BarChartResponse();
        response.setCategories(monthCount.keySet().toArray(new String[0]));
        response.setData(monthCount.values().stream().mapToInt(i->i).toArray());

        return response;
    }
    public BarChartResponse singlebarchChart() {
        List<Agency> agencies = agencyRepo.findAll();
        Map<String, Integer> activityCount = new HashMap<>();

        for (Agency agency : agencies) {
            String[] activities = agency.getActivity().split(",");
            for (String activity : activities) {
                activity = activity.trim();
                if (activityCount.containsKey(activity)) {
                    activityCount.put(activity, activityCount.get(activity) + 1);
                } else {
                    activityCount.put(activity, 1);
                }
            }
        }

        BarChartResponse response = new BarChartResponse();
        response.setCategories(activityCount.keySet().toArray(new String[0]));
        response.setData(activityCount.values().stream().mapToInt(i -> i).toArray());

        return response;
    }
    public BarChartResponse singlePieChart() {
        List<User> users = userRepo.findAll();
        Map<String, Integer> ageCount = new HashMap<>();

        for (User user : users) {
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
    public BarChartResponse usersByCountry() {
        List<User> users = userRepo.findAll();
        Map<String, Integer> countryCount = new HashMap<>();

        for (User user : users) {
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
    public BarChartResponse usersByGender() {
        List<User> users = userRepo.findAll();
        Map<String, Integer> genderCount = new HashMap<>();

        for (User user : users) {
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
    public TotalCount getTotalCounts() {
        long totalReservations = reservationRepo.count();
        long totalEvents = eventRepo.count();
        long totalUsers = userRepo.count();

        return new TotalCount(totalReservations, totalEvents, totalUsers);
    }
    public BarChartResponse revenueParMois() {
        List<Reservation> r = reservationRepo.findAll();

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
    public List<AgencyRevenue> getTop3AgenciesLastYear() {
        List<Reservation> reservations = reservationRepo.findAll();

        Map<String, Map<String, Integer>> agencyRevenues = new HashMap<>();
        for (Reservation reservation : reservations) {
            LocalDate reservationDate = reservation.getReservation_date();
            if (reservationDate.isBefore(LocalDate.now().minusYears(1))) {
                continue; // Ignore reservations older than one year
            }

            String agencyName = reservation.getEvent().getAgency().getAgency();
            int revenue = reservation.getEvent().getTicket_price(); // Assumption: revenue is ticket price
            String quarter = "Q" + ((reservationDate.getMonthValue() - 1) / 3 + 1);

            Map<String, Integer> agencyRevenue = agencyRevenues.getOrDefault(agencyName, new HashMap<>());
            // Initialize all quarters to 0 if not already done
            for (int i = 1; i <= 4; i++) {
                agencyRevenue.putIfAbsent("Q" + i, 0);
            }
            agencyRevenue.put(quarter, agencyRevenue.get(quarter) + revenue);

            agencyRevenues.put(agencyName, agencyRevenue);
        }

        List<AgencyRevenue> result = new ArrayList<>();
        for (Map.Entry<String, Map<String, Integer>> entry : agencyRevenues.entrySet()) {
            result.add(new AgencyRevenue(entry.getKey(), entry.getValue()));
        }

        result.sort(Comparator.comparing(AgencyRevenue::getTotalRevenue).reversed());
        return result.subList(0, Math.min(result.size(), 3));
    }

}
