package com.kotekka.app.service;

import com.kotekka.app.domain.*; // for static metamodels
import com.kotekka.app.domain.Image;
import com.kotekka.app.repository.ImageRepository;
import com.kotekka.app.service.criteria.ImageCriteria;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.jhipster.service.QueryService;

/**
 * Service for executing complex queries for {@link Image} entities in the database.
 * The main input is a {@link ImageCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link Page} of {@link Image} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class ImageQueryService extends QueryService<Image> {

    private static final Logger LOG = LoggerFactory.getLogger(ImageQueryService.class);

    private final ImageRepository imageRepository;

    public ImageQueryService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    /**
     * Return a {@link Page} of {@link Image} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<Image> findByCriteria(ImageCriteria criteria, Pageable page) {
        LOG.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<Image> specification = createSpecification(criteria);
        return imageRepository.findAll(specification, page);
    }

    /**
     * Return the number of matching entities in the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(ImageCriteria criteria) {
        LOG.debug("count by criteria : {}", criteria);
        final Specification<Image> specification = createSpecification(criteria);
        return imageRepository.count(specification);
    }

    /**
     * Function to convert {@link ImageCriteria} to a {@link Specification}
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching {@link Specification} of the entity.
     */
    protected Specification<Image> createSpecification(ImageCriteria criteria) {
        Specification<Image> specification = Specification.where(null);
        if (criteria != null) {
            // This has to be called first, because the distinct method returns null
            if (criteria.getDistinct() != null) {
                specification = specification.and(distinct(criteria.getDistinct()));
            }
            if (criteria.getId() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getId(), Image_.id));
            }
            if (criteria.getUuid() != null) {
                specification = specification.and(buildSpecification(criteria.getUuid(), Image_.uuid));
            }
            if (criteria.getName() != null) {
                specification = specification.and(buildStringSpecification(criteria.getName(), Image_.name));
            }
            if (criteria.getWalletHolder() != null) {
                specification = specification.and(buildSpecification(criteria.getWalletHolder(), Image_.walletHolder));
            }
            if (criteria.getCreatedBy() != null) {
                specification = specification.and(buildStringSpecification(criteria.getCreatedBy(), Image_.createdBy));
            }
            if (criteria.getCreatedDate() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getCreatedDate(), Image_.createdDate));
            }
            if (criteria.getLastModifiedBy() != null) {
                specification = specification.and(buildStringSpecification(criteria.getLastModifiedBy(), Image_.lastModifiedBy));
            }
            if (criteria.getLastModifiedDate() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getLastModifiedDate(), Image_.lastModifiedDate));
            }
        }
        return specification;
    }
}
