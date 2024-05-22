package com.blockhomes.tradings.exception.common;

public class EnumNotMatchException extends RuntimeException {

    Class<?> enumClass;
    Integer value;

    public EnumNotMatchException(Class<?> enumClass, Integer value) {
        this.enumClass = enumClass;
        this.value = value;
    }

    @Override
    public String getMessage() {
        return "Enum not match : " + enumClass.getSimpleName() + ", " + value;
    }

}
