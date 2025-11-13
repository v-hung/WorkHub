# dotnet publish -c Release -o ../app/publish

# FROM mcr.microsoft.com/dotnet/aspnet:8.0
# WORKDIR /app
# COPY /app/publish .
# EXPOSE 8080
# ENTRYPOINT ["dotnet", "WorkHub.Server.dll"]


# ===== 1. Build React frontend =====
FROM node:22 AS client-build
WORKDIR /app
COPY workhub.client/ .
ENV BUILD_ENV=build
RUN npm install
RUN npm run build

# ===== 2. Build ASP.NET Core backend =====
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY . .
WORKDIR /src/WorkHub.Server
RUN dotnet restore
RUN dotnet publish -c Release -r linux-x64 --self-contained=false -o /app/publish

# ===== 3. Final image =====
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copy backend output
COPY --from=build /app/publish .

# Copy frontend build to wwwroot
COPY --from=client-build /app/dist ./wwwroot

RUN apt-get update && apt-get install -y \
	libfontconfig1 \
	libfreetype6 \
	libjpeg62-turbo \
	libpng16-16 \
	libgif7 \
	libglib2.0-0 \
	curl \
	netcat-openbsd \
	&& rm -rf /var/lib/apt/lists/*

COPY wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh

EXPOSE 8080

ENTRYPOINT ["/wait-for-db.sh", "mysql"]
CMD ["dotnet", "WorkHub.Server.dll"]
