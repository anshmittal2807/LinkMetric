    package com.LinkMetric.LinkMetric.Dtos.request;

    import jakarta.validation.constraints.NotBlank;
    import jakarta.validation.constraints.NotNull;
    import jakarta.validation.constraints.Pattern;

    public class CustomAliasReq {


        @NotNull(message = "LinkID cannot be null")
        private Integer linkId;

        @NotBlank(message = "Custom alias cannot be blank")
        @Pattern(
                regexp = "^[a-zA-Z0-9_-]+$",
                message = "Please use a valid custom alias"
        )
        private String hash;
        public CustomAliasReq(Integer linkId, String hash) {
            this.linkId = linkId;
            this.hash = hash;
        }

        public Integer getLinkId() {
            return linkId;
        }

        public void setLinkId(Integer linkId) {
            this.linkId = linkId;
        }

        public String getHash() {
            return hash;
        }

        public void setHash(String hash) {
            this.hash = hash;
        }

        public CustomAliasReq() {
        }

    }
