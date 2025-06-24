namespace WorkHub.Application.Attributes
{
	[AttributeUsage(AttributeTargets.Class)]
	public class LocalizePrefixAttribute : Attribute
	{
		public string Prefix { get; }

		public LocalizePrefixAttribute(string prefix)
		{
			Prefix = prefix;
		}
	}
}