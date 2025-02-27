var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.WorkTimeTracker_WebAPI>("webapi");

builder.Build().Run();
