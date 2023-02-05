FROM mcr.microsoft.com/dotnet/sdk:6.0 AS installer-env
WORKDIR /function

# Build requires 3.1 SDK
COPY --from=mcr.microsoft.com/dotnet/core/sdk:3.1 /usr/share/dotnet /usr/share/dotnet
COPY . /src/dotnet-function-app

WORKDIR /src/dotnet-function-app
RUN mkdir -p /home/site/wwwroot 

WORKDIR /GTT-API
COPY "GTT-BE.sln" "GTT-BE.sln"
COPY "src/Services/GTT/GTT.Api/GTT.Api.csproj" "src/Services/GTT/GTT.Api/GTT.Api.csproj"
COPY "src/Services/GTT/shared/GTT.Application/GTT.Application.csproj" "src/Services/GTT/shared/GTT.Application/GTT.Application.csproj"
COPY "src/Services/GTT/shared/GTT.Domain/GTT.Domain.csproj" "src/Services/GTT/shared/GTT.Domain/GTT.Domain.csproj"
COPY "src/Services/GTT/shared/GTT.Infrastructure/GTT.Infrastructure.csproj" "src/Services/GTT/shared/GTT.Infrastructure/GTT.Infrastructure.csproj"

RUN dotnet restore "GTT-BE.sln"

COPY . .

WORKDIR /GTT-API/src/Services/GTT/GTT.Api

RUN dotnet publish --no-restore -c Release -o /function

FROM mcr.microsoft.com/azure-functions/dotnet:4
ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
   AzureFunctionsJobHost__Logging__Console__IsEnabled=true
EXPOSE 7071
COPY --from=installer-env ["/home/site/wwwroot", "/home/site/wwwroot"]
