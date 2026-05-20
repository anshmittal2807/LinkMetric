package com.LinkMetric.LinkMetric.Dtos.response;

import java.time.LocalDateTime;

public class ExceptionDto {

    private String message;
    private int status ;
    private LocalDateTime timeStamp;
    private Boolean success = false;

    public ExceptionDto(String message, int status) {
        this.message = message;
        this.status = status;
        this.timeStamp = LocalDateTime.now();
        this.success = false;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
