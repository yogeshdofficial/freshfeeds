# syntax=docker/dockerfile:1

# ---- Build stage: compile a regular JVM jar ----
FROM eclipse-temurin:25-jdk AS build
WORKDIR /app
COPY . .
RUN sh ./mvnw -DskipTests package

# ---- Runtime stage: JRE image with the jar ----
FROM eclipse-temurin:25-jre
WORKDIR /app
COPY --from=build /app/target/freshfeeds-backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
