package com.blockhomes.tradings.repository.common;

import com.blockhomes.tradings.entity.common.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Integer>, ImageRepositoryCustom {

}
