namespace WorkHub.Domain.Entities.Audit;

public interface IEntity
{
}
public interface IEntity<TId> : IEntity
{
	TId Id { get; set; }
}