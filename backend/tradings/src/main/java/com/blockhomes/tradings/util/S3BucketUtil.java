package com.blockhomes.tradings.util;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class S3BucketUtil {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.region.static}")
    private String region;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String uploadFile(MultipartFile file, String folderName) {
        try {
            String extension = StringUtils.getFilenameExtension(file.getOriginalFilename());
            String key = UUID.randomUUID() + "." + extension;

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            metadata.setContentLength(file.getSize());

            PutObjectRequest request =
                new PutObjectRequest(bucket + "/" + folderName, key, file.getInputStream(), metadata);

            request.withCannedAcl(CannedAccessControlList.AuthenticatedRead);
            amazonS3Client.putObject(request);

            return key;
        } catch (IOException e) {
            log.error(e.getMessage());
            return "";
        }

    }

    public void deleteFile(String fileName, String folderName) {
        amazonS3Client.deleteObject(bucket + "/" + folderName, fileName);
    }

    public String getFileUrl(String key, String folderName) {
        return "https://" + bucket + ".s3." + region + ".amazonaws.com/" + folderName + "/" + key;
    }

    public List<String> getFileUrlList(List<String> keys, String folderName) {
        List<String> urlList = new ArrayList<>();

        for (String key : keys) {
            urlList.add(getFileUrl(key, folderName));
        }

        return urlList;
    }

}
