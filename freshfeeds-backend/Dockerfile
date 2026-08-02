# syntax=docker/dockerfile:1

# ---- Build stage: compile a GraalVM native executable ----
FROM ghcr.io/graalvm/native-image-community:25 AS build
WORKDIR /app
COPY . .
RUN sh ./mvnw -Pnative -DskipTests native:compile

# ---- Runtime stage: minimal image with just the native binary ----
FROM gcr.io/distroless/base-debian12:nonroot
COPY --from=build /app/target/freshfeeds-backend /app
EXPOSE 8080
USER nonroot
ENTRYPOINT ["/app"]
