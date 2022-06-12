using Serenity.ComponentModel;
using System;

namespace Indotalent.Administration.Forms
{
    [ColumnsScript("Administration.Language")]
    [BasedOnRow(typeof(Entities.LanguageRow), CheckNames = true)]
    public class LanguageColumns
    {
        [EditLink]
        public String LanguageId { get; set; }
        [EditLink, SortOrder(-1)]
        public String LanguageName { get; set; }
    }
}