package com.blockhomes.tradings.dto.chat;

import com.blockhomes.tradings.entity.chat.RoleCategory;
import com.blockhomes.tradings.exception.common.EnumNotMatchException;
import lombok.Getter;

@Getter
public enum MessageType {
    ENTER(1),
    TALK(2),
    INFO(3);

    private final Integer value;

    MessageType(Integer value) {
        this.value = value;
    }

    public static MessageType valueToEnum(Integer value) {
        for (MessageType m : MessageType.values()) {
            if (m.getValue().equals(value)) return m;
        }

        throw new EnumNotMatchException(MessageType.class, value);
    }

    public static Integer enumToValue(MessageType messageType) {
        for (MessageType m : MessageType.values()) {
            if (m.equals(messageType)) return m.getValue();
        }

        return 0;
    }

}
