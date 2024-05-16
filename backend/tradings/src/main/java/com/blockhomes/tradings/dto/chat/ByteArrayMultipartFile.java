package com.blockhomes.tradings.dto.chat;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Path;

public class ByteArrayMultipartFile implements MultipartFile {

    private final byte[] fileContent;
    private final String originalFilename;
    private final String contentType;

    @Builder
    public ByteArrayMultipartFile(byte[] fileContent, String originalFilename, String contentType) {
        this.fileContent = fileContent;
        this.originalFilename = originalFilename;
        this.contentType = contentType;
    }

    @Override
    public String getName() {
        return originalFilename;
    }

    @Override
    public String getOriginalFilename() {
        return originalFilename;
    }

    @Override
    public String getContentType() {
        return contentType;
    }

    @Override
    public boolean isEmpty() {
        return fileContent == null || fileContent.length == 0;
    }

    @Override
    public long getSize() {
        return fileContent.length;
    }

    @Override
    public byte[] getBytes() throws IOException {
        return fileContent;
    }

    @Override
    public InputStream getInputStream() throws IOException {
        return new ByteArrayInputStream(fileContent);
    }

    @Override
    public void transferTo(File dest) throws IOException, IllegalStateException {
        try (OutputStream out = new FileOutputStream(dest)) {
            out.write(fileContent);
        }
    }
}