# ---------- Build stage ----------
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom.xml from backend folder
COPY backend/pom.xml .

# Download dependencies
RUN mvn -B -q -DskipTests dependency:go-offline

# Copy source code from backend/src folder
COPY backend/src ./src

# Build the project
RUN mvn -B -q -DskipTests package

# ---------- Run stage ----------
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose Render's PORT
ENV PORT=8080
EXPOSE 8080

# Run the Spring Boot app
CMD ["sh", "-c", "java -Dserver.port=${PORT} -jar app.jar"]
