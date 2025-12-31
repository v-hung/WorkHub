# Copilot Instructions for WorkHub Repository

## High-Level Details

**Repository Summary**: WorkHub is a comprehensive work management and timesheet system built with a .NET 8 backend API and a React/TypeScript frontend. It integrates with BioStar access control systems and supports features like user management, project tracking, timesheets, leave requests, equipment management, and notifications.

**Project Type**: Full-stack web application with clean architecture.

**Languages and Frameworks**:

- Backend: C# .NET 8.0 (ASP.NET Core Web API)
- Frontend: TypeScript/React 18 with Vite
- Database: MySQL with Entity Framework Core 8.0
- UI Framework: Ant Design 5.x
- State Management: Zustand
- Internationalization: i18next
- Real-time: SignalR

**Target Runtimes**:

- Backend: .NET 8.0 runtime
- Frontend: Modern browsers (ES modules)
- Database: MySQL 8.0

## Build Instructions

### Prerequisites

- .NET 8.0 SDK installed
- Node.js 22+ and npm installed
- MySQL 8.0 server running locally (for development)
- Git for version control

### Bootstrap

Always run these commands in order before any development work:

1. `dotnet restore` - Restores all NuGet packages for the solution
2. `cd workhub.client && npm install` - Installs all npm dependencies for the frontend

### Build

- **Backend**: `dotnet build WorkHub.Server/WorkHub.Server.csproj` - Builds the .NET solution
- **Frontend**: `cd workhub.client && npm run build` - Builds the React application for production
- **Full Build**: Use the VS Code task "build" which runs `dotnet build WorkHub.Server/WorkHub.Server.csproj`

### Test

No automated tests are currently configured in this repository. Manual testing is performed by running the application and verifying functionality.

### Run

- **Development (Backend + Frontend)**: `dotnet watch run --project WorkHub.Server/WorkHub.Server.csproj` - Starts the backend with hot reload and serves the frontend via SPA proxy
- **Frontend Only**: `cd workhub.client && npm run dev` - Runs the frontend development server on https://localhost:52045
- **Database**: Start MySQL server locally with database "timesheet" and user "root"/"Admin@123"
- **Docker**: `docker-compose up --build` - Builds and runs the full application with MySQL and phpMyAdmin

### Lint

- **Frontend**: `cd workhub.client && npm run lint` - Runs ESLint on the React codebase
- **Backend**: No linting configured (consider adding StyleCop or similar)

### Database Setup

1. Ensure MySQL is running with the connection string from `WorkHub.Server/appsettings.json`
2. Run migrations: `cd WorkHub.Server && dotnet ef database update`
3. To create new migrations: `dotnet ef migrations add <MigrationName> --project ../WorkHub.Infrastructure --startup-project .`

### Validation Steps

- Backend builds without errors
- Frontend builds without errors and generates dist/ folder
- Application starts and serves on http://localhost:5240 (backend) and https://localhost:52045 (frontend proxy)
- Swagger documentation available at http://localhost:5240/swagger
- Database connection successful (check logs for connection errors)
- BioStar integration (optional - requires local BioStar server)

### Environment Setup Notes

- The application expects MySQL running locally with specific credentials (see appsettings.json)
- BioStar integration requires a local BioStar server at 192.168.11.89:999
- Email configuration uses Gmail SMTP (credentials in appsettings.json)
- Docker setup includes MySQL and phpMyAdmin for easy database management

### Docker Build Process

The Dockerfile performs a multi-stage build:

1. Builds the React frontend using Node.js 22
2. Builds and publishes the .NET backend for Linux x64
3. Combines both in a final ASP.NET Core runtime image
4. Includes wait-for-db.sh script for database readiness

## Project Layout

### Major Architectural Elements

- **WorkHub.Server**: ASP.NET Core Web API entry point with controllers, middleware, and configuration
- **WorkHub.Application**: Business logic layer with MediatR commands/queries, DTOs, and services
- **WorkHub.Domain**: Domain entities, enums, and repository interfaces
- **WorkHub.Infrastructure**: Data access (EF Core), external services (BioStar, Email), and infrastructure concerns
- **workhub.client**: React SPA with TypeScript, using Vite for building

### Key Configuration Files

- `WorkHub.Server/appsettings.json`: Application configuration (database, JWT, email, BioStar)
- `workhub.client/package.json`: Frontend dependencies and scripts
- `workhub.client/vite.config.ts`: Vite configuration for React build
- `workhub.client/tsconfig.json`: TypeScript configuration
- `workhub.client/eslint.config.js`: ESLint configuration for code quality
- `compose.yaml`: Docker Compose configuration for local development
- `Dockerfile`: Multi-stage Docker build configuration

### Validation and CI/CD

No GitHub Actions workflows are currently configured. Validation is performed manually by:

1. Building the solution
2. Running the application
3. Testing key functionality through the UI and API
4. Checking browser console for frontend errors
5. Verifying database operations

### Dependencies

- **Backend**: ASP.NET Core, Entity Framework Core, MediatR, SignalR, Swagger, FluentValidation
- **Frontend**: React, Ant Design, Zustand, i18next, date-fns, React Router
- **Database**: MySQL with Pomelo.EntityFrameworkCore.MySql
- **External**: BioStar API integration, Gmail SMTP for emails

### Root Directory Contents

- `compose.yaml`: Docker Compose setup
- `Dockerfile`: Container build instructions
- `README.md`: Basic migration instructions
- `wait-for-db.sh`: Database readiness check script
- `WorkHub.sln`: Visual Studio solution file
- `.vscode/`: VS Code settings and tasks
- `.github/`: GitHub-specific files (this instructions file)

### Key Source Files

- `WorkHub.Server/Program.cs`: Application startup and service registration
- `WorkHub.Server/Controllers/`: API endpoint controllers
- `WorkHub.Application/Features/`: MediatR handlers for business logic
- `WorkHub.Domain/Entities/`: Core business entities
- `workhub.client/src/main.tsx`: React application entry point
- `workhub.client/src/App.tsx`: Main React component with routing
- `workhub.client/copilot-instructions.md`: Frontend-specific development instructions

### Next Level Directories

- **WorkHub.Server**: Controllers, Extensions, Hubs (SignalR), Middlewares, Properties, Resources, SignalR, Swagger, Templates, wwwroot
- **WorkHub.Application**: Attributes, Configs, DTOs, Exceptions, Extensions, Factories, Features, Interfaces, JsonConverters, Mappings, Models, Requests, Resources, Responses, Utils, Wrapper
- **WorkHub.Domain**: Constants, Entities, Enums, Repositories
- **WorkHub.Infrastructure**: Authorization, Data, Extensions, Helpers, Messaging, Migrations, Models, Resources, Services
- **workhub.client**: public/, src/ (components, pages, stores, utils, etc.), img/, CHANGELOG.md, eslint.config.js, index.html, openapitools.json, package.json, tsconfig.\*, vite.config.ts

## Trust and Usage Guidelines

Trust these instructions as the authoritative source for building, running, and modifying this codebase. Only search for additional information if these instructions prove incomplete or incorrect for your specific task. The instructions are based on thorough analysis of the codebase structure, build outputs, and runtime behavior.
