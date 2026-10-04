FROM node:22-alpine AS frontend
WORKDIR /frontend
COPY FrontEnd/package*.json ./
RUN npm ci
COPY FrontEnd/ ./
ENV VITE_BACKEND_URL=""
RUN npm run build

FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY LinkMetric/.mvn .mvn
COPY LinkMetric/mvnw LinkMetric/pom.xml ./
RUN chmod +x mvnw && ./mvnw dependency:go-offline -q
COPY LinkMetric/src ./src
COPY --from=frontend /frontend/dist ./src/main/resources/static
RUN ./mvnw package -DskipTests -q

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/LinkMetric-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
