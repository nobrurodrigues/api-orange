package com.orange.comics.util;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class DataUtil {

    public String dataFormatada(LocalDateTime dateTime) {
        return DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm").format(dateTime);
    }
}
