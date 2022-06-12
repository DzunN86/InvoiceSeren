namespace Indotalent
{
    public class DefaultOptions
    {
        /// <summary>
        /// Default sectionkey for DefaultOptions
        /// </summary>
        public const string SectionKey = "DefaultOptions";
        public string CopyrightWording { get; set; }
        public string ApplicationName { get; set; }
        public string Currency { get; set; }
        public int MaximumUser { get; set; }
    }
}
