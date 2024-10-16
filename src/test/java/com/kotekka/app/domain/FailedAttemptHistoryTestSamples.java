package com.kotekka.app.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class FailedAttemptHistoryTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static FailedAttemptHistory getFailedAttemptHistorySample1() {
        return new FailedAttemptHistory()
            .id(1L)
            .login("login1")
            .ipAddress("ipAddress1")
            .device(UUID.fromString("23d8dc04-a48b-45d9-a01d-4b728f0ad4aa"))
            .reason("reason1");
    }

    public static FailedAttemptHistory getFailedAttemptHistorySample2() {
        return new FailedAttemptHistory()
            .id(2L)
            .login("login2")
            .ipAddress("ipAddress2")
            .device(UUID.fromString("ad79f240-3727-46c3-b89f-2cf6ebd74367"))
            .reason("reason2");
    }

    public static FailedAttemptHistory getFailedAttemptHistoryRandomSampleGenerator() {
        return new FailedAttemptHistory()
            .id(longCount.incrementAndGet())
            .login(UUID.randomUUID().toString())
            .ipAddress(UUID.randomUUID().toString())
            .device(UUID.randomUUID())
            .reason(UUID.randomUUID().toString());
    }
}
