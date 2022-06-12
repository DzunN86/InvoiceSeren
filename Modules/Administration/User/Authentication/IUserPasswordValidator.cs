namespace Indotalent.Administration
{
    public interface IUserPasswordValidator
    {
        PasswordValidationResult Validate(ref string username, string password);
    }
}