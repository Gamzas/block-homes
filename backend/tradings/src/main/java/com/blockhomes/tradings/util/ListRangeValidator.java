package com.blockhomes.tradings.util;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.List;

public class ListRangeValidator implements ConstraintValidator<ListRange, List<Integer>> {

    private Integer min;
    private Integer max;

    @Override
    public void initialize(ListRange constraintAnnotation) {
        this.min = constraintAnnotation.min();
        this.max = constraintAnnotation.max();
    }

    @Override
    public boolean isValid(List<Integer> integers, ConstraintValidatorContext constraintValidatorContext) {
        if (integers == null) return false;

        for (Integer value : integers) {
            if (value == null || value < min || value > max) {
                return false;
            }
        }

        return true;
    }
}
