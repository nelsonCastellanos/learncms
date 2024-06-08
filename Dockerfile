# Etapa 1: Construir el frontend con Vite
FROM node:22.2.0 AS build-frontend

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios para el build
COPY package.json package-lock.json vite.config.js ./
COPY frontend ./frontend

# Instalar dependencias y construir el frontend
RUN npm install
RUN npm run build

# Etapa 2: Construir el backend con Go
FROM golang:1.22 AS build-backend

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios para el build
# COPY go.mod go.sum ./
COPY go.mod ./
RUN go mod download
COPY backend .

# Construir el binario de Go
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /go/bin/app ./cmd/main.go

# Etapa 3: Crear la imagen final
FROM alpine:latest

# Instalar certificados CA
RUN apk --no-cache add ca-certificates

# Crear directorio para la aplicación
WORKDIR /root/

# Copiar el binario de Go desde la etapa anterior
COPY --from=build-backend /go/bin/app .

# Copiar los archivos construidos del frontend desde la etapa anterior
COPY --from=build-frontend /app/dist ./static

# Establecer la variable de entorno para producción
ENV ENV=production

# Exponer el puerto de la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["./app"]
