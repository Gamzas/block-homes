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

    public void deleteFiles(List<String> fileKey, String folderName) {
        for (String key : fileKey) {
            amazonS3Client.deleteObject(bucket + "/" + folderName, key);
        }
    }

    public String getFileUrl(String key, String folderName) {
        return "https://" + bucket + ".s3." + region + ".amazonaws.com/" + folderName + "/" + key;
    }

    public String getFileKey(String fileUrl, Integer itemNo) {
        String prefix = "https://" + bucket + ".s3." + region + ".amazonaws.com/items/" + itemNo + "/";
        
        if (fileUrl.startsWith(prefix)) {
            return fileUrl.substring(prefix.length());
        }

        throw new IllegalArgumentException(fileUrl);
    }

    public List<String> getFileKeyList(List<String> fileUrls, Integer itemNo) {
        List<String> fileKeyList = new ArrayList<>();

        for (String fileUrl : fileUrls) {
            fileKeyList.add(getFileKey(fileUrl, itemNo));
        }

        return fileKeyList;
    }

}
