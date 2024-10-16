package com.kotekka.app.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class WalletHolderAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertWalletHolderAllPropertiesEquals(WalletHolder expected, WalletHolder actual) {
        assertWalletHolderAutoGeneratedPropertiesEquals(expected, actual);
        assertWalletHolderAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertWalletHolderAllUpdatablePropertiesEquals(WalletHolder expected, WalletHolder actual) {
        assertWalletHolderUpdatableFieldsEquals(expected, actual);
        assertWalletHolderUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertWalletHolderAutoGeneratedPropertiesEquals(WalletHolder expected, WalletHolder actual) {
        assertThat(expected)
            .as("Verify WalletHolder auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertWalletHolderUpdatableFieldsEquals(WalletHolder expected, WalletHolder actual) {
        assertThat(expected)
            .as("Verify WalletHolder relevant properties")
            .satisfies(e -> assertThat(e.getUuid()).as("check uuid").isEqualTo(actual.getUuid()))
            .satisfies(e -> assertThat(e.getType()).as("check type").isEqualTo(actual.getType()))
            .satisfies(e -> assertThat(e.getStatus()).as("check status").isEqualTo(actual.getStatus()))
            .satisfies(e -> assertThat(e.getPhoneNumber()).as("check phoneNumber").isEqualTo(actual.getPhoneNumber()))
            .satisfies(e -> assertThat(e.getNetwork()).as("check network").isEqualTo(actual.getNetwork()))
            .satisfies(e -> assertThat(e.getTag()).as("check tag").isEqualTo(actual.getTag()))
            .satisfies(e -> assertThat(e.getFirstName()).as("check firstName").isEqualTo(actual.getFirstName()))
            .satisfies(e -> assertThat(e.getLastName()).as("check lastName").isEqualTo(actual.getLastName()))
            .satisfies(e -> assertThat(e.getAddress()).as("check address").isEqualTo(actual.getAddress()))
            .satisfies(e -> assertThat(e.getCity()).as("check city").isEqualTo(actual.getCity()))
            .satisfies(e -> assertThat(e.getCountry()).as("check country").isEqualTo(actual.getCountry()))
            .satisfies(e -> assertThat(e.getPostalCode()).as("check postalCode").isEqualTo(actual.getPostalCode()))
            .satisfies(e -> assertThat(e.getOnboarding()).as("check onboarding").isEqualTo(actual.getOnboarding()))
            .satisfies(e -> assertThat(e.getExternalId()).as("check externalId").isEqualTo(actual.getExternalId()))
            .satisfies(e -> assertThat(e.getEmail()).as("check email").isEqualTo(actual.getEmail()))
            .satisfies(e -> assertThat(e.getDateOfBirth()).as("check dateOfBirth").isEqualTo(actual.getDateOfBirth()))
            .satisfies(e -> assertThat(e.getSex()).as("check sex").isEqualTo(actual.getSex()))
            .satisfies(e -> assertThat(e.getCreatedBy()).as("check createdBy").isEqualTo(actual.getCreatedBy()))
            .satisfies(e -> assertThat(e.getCreatedDate()).as("check createdDate").isEqualTo(actual.getCreatedDate()))
            .satisfies(e -> assertThat(e.getLastModifiedBy()).as("check lastModifiedBy").isEqualTo(actual.getLastModifiedBy()))
            .satisfies(e -> assertThat(e.getLastModifiedDate()).as("check lastModifiedDate").isEqualTo(actual.getLastModifiedDate()))
            .satisfies(e -> assertThat(e.getLoginStatus()).as("check loginStatus").isEqualTo(actual.getLoginStatus()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertWalletHolderUpdatableRelationshipsEquals(WalletHolder expected, WalletHolder actual) {
        // empty method
    }
}
