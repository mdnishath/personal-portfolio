<input
  type="password"
  name="password"
  ref={register({
    required: "Password is required",
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be 8-30 characters long",
    },
    validate: (value) => {
      const conditions = [
        /[a-z]/, // Lowercase letter
        /[A-Z]/, // Uppercase letter
        /\d/, // Number
        /[#$@!%&*?]/, // Special character
      ];

      const conditionErrors = conditions.reduce((errors, condition) => {
        if (!condition.test(value)) {
          return [...errors, `Password must contain ${condition.toString()}`];
        }
        return errors;
      }, []);

      if (conditionErrors.length > 0) {
        return conditionErrors.join(", ");
      }
      return true;
    },
  })}
/>;
{
  errors.password && <span>{errors.password.message}</span>;
}
