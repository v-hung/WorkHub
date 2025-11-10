`cd WorkHub.Server`

### migrations

```
dotnet ef migrations add Init --project ../WorkHub.Infrastructure --startup-project .
```

### update database

```
dotnet ef database update
```
