package com.kotekka.app.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class ImageTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Image getImageSample1() {
        return new Image()
            .id(1L)
            .uuid(UUID.fromString("23d8dc04-a48b-45d9-a01d-4b728f0ad4aa"))
            .name("name1")
            .walletHolder(UUID.fromString("23d8dc04-a48b-45d9-a01d-4b728f0ad4aa"))
            .createdBy("createdBy1")
            .lastModifiedBy("lastModifiedBy1");
    }

    public static Image getImageSample2() {
        return new Image()
            .id(2L)
            .uuid(UUID.fromString("ad79f240-3727-46c3-b89f-2cf6ebd74367"))
            .name("name2")
            .walletHolder(UUID.fromString("ad79f240-3727-46c3-b89f-2cf6ebd74367"))
            .createdBy("createdBy2")
            .lastModifiedBy("lastModifiedBy2");
    }

    public static Image getImageRandomSampleGenerator() {
        return new Image()
            .id(longCount.incrementAndGet())
            .uuid(UUID.randomUUID())
            .name(UUID.randomUUID().toString())
            .walletHolder(UUID.randomUUID())
            .createdBy(UUID.randomUUID().toString())
            .lastModifiedBy(UUID.randomUUID().toString());
    }
}
