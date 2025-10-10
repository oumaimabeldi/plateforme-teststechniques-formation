# Étape 1 : Build du JAR avec Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Copier le pom.xml et télécharger les dépendances
COPY pom.xml .
RUN mvn dependency:go-offline

# Copier le code source
COPY src ./src

# Compiler et packager le backend sans exécuter les tests
RUN mvn clean package -DskipTests

# Étape 2 : Exécution du JAR
FROM openjdk:17-alpine
WORKDIR /app

# Copier le jar construit dans l’étape précédente
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]
