package com.blockhomes.tradings.util;

import com.blockhomes.tradings.exception.common.DateNotFormattedException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

public class LocalDateTimeUtil {

    public static LocalDateTime stringToLocalDateTime(String dateStr) {
        if (Objects.isNull(dateStr)) {
            throw new DateNotFormattedException();
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(dateStr, formatter).atStartOfDay();
    }

}
