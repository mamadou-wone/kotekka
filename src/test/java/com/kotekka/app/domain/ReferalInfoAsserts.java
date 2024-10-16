package com.kotekka.app.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class ReferalInfoAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertReferalInfoAllPropertiesEquals(ReferalInfo expected, ReferalInfo actual) {
        assertReferalInfoAutoGeneratedPropertiesEquals(expected, actual);
        assertReferalInfoAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertReferalInfoAllUpdatablePropertiesEquals(ReferalInfo expected, ReferalInfo actual) {
        assertReferalInfoUpdatableFieldsEquals(expected, actual);
        assertReferalInfoUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertReferalInfoAutoGeneratedPropertiesEquals(ReferalInfo expected, ReferalInfo actual) {
        assertThat(expected)
            .as("Verify ReferalInfo auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertReferalInfoUpdatableFieldsEquals(ReferalInfo expected, ReferalInfo actual) {
        assertThat(expected)
            .as("Verify ReferalInfo relevant properties")
            .satisfies(e -> assertThat(e.getUuid()).as("check uuid").isEqualTo(actual.getUuid()))
            .satisfies(e -> assertThat(e.getReferalCode()).as("check referalCode").isEqualTo(actual.getReferalCode()))
            .satisfies(e -> assertThat(e.getWalletHolder()).as("check walletHolder").isEqualTo(actual.getWalletHolder()))
            .satisfies(e -> assertThat(e.getRefered()).as("check refered").isEqualTo(actual.getRefered()))
            .satisfies(e -> assertThat(e.getStatus()).as("check status").isEqualTo(actual.getStatus()))
            .satisfies(e -> assertThat(e.getCreatedBy()).as("check createdBy").isEqualTo(actual.getCreatedBy()))
            .satisfies(e -> assertThat(e.getCreatedDate()).as("check createdDate").isEqualTo(actual.getCreatedDate()))
            .satisfies(e -> assertThat(e.getLastModifiedBy()).as("check lastModifiedBy").isEqualTo(actual.getLastModifiedBy()))
            .satisfies(e -> assertThat(e.getLastModifiedDate()).as("check lastModifiedDate").isEqualTo(actual.getLastModifiedDate()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertReferalInfoUpdatableRelationshipsEquals(ReferalInfo expected, ReferalInfo actual) {
        // empty method
    }
}
