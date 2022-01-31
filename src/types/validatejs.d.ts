export type ValidateFunctionValidator<T> =
  (value: unknown, attributes: T, attributeName: string, options: unknown, constraints: unknown) =>
  null | boolean | ValidateJSSchema

type Datetime = {
  earliest?: Date
  latest?: Date
  dateOnly?: boolean
  message?: string
} | boolean | string

type Email = {
  message?: string
} | boolean | string

type Equality = {
  attribute?: string
  message?: string
  comparator?: (v1: any, v2: any) => boolean
} | string

type ExclusionInclusion = {
  within?: { [key: string]: unknown }
  message?: string
} | any[]

type Format = {
  pattern: string
  flags?: string
  message?: string
} | RegExp | string

type Length = {
  is?: number
  minimum?: number
  maximum?: number
  tooShort?: string
  tokenizer?: (value: any) => string
  message?: string
}

type Numericality = {
  strict?: boolean
  onlyInteger?: boolean
  even?: boolean
  odd?: boolean
  noStrings?: boolean
  divisibleBy?: number
  greaterThan?: number
  greaterThanOrEqualTo?: number
  equalTo?: number
  lessThan?: number
  lessThanOrEqualTo?: number
  message?: string
  notValid?: string
  notInteger?: string
  notGreaterThan?: string
  notGreaterThanOrEqualTo?: string
  notEqualTo?: string
  notLessThan?: string
  notLessThanOrEqualTo?: string
  notDivisibleBy?: string
  notOdd?: string
  notEven?: string
} | boolean

type Presence = {
  /**
  setting the allowEmpty to false will disallow the following values:

        {} (empty objects)
        [] (empty arrays)
        "" (empty string)
        " " (whitespace only string)
  */
  allowEmpty: boolean
  message?: string
} | boolean

type TypeValidateType = 'string' | 'number' | 'integer' | 'array' | 'boolean' | 'date' | string
type TypeValidate = {
  type?: TypeValidateType | ((value: unknown) => boolean)
  message?: string
} | TypeValidateType

type URLValidate = {
  /** if true allows local hostnames such as 10.0.1.1 or localhost. The default is false */
  allowLocal?: boolean
  /** if true allows data URLs as defined in RFC 2397. The default is false */
  allowDataUrl?: boolean
  /** A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example [".+"]). The default value is ["http", "https"] */
  schemes?: string[]
  message?: string
} | boolean

export interface ValidateJSSchema {

  /**
  This datetime validator can be used to validate dates and times. Since date parsing in javascript is very poor some additional work is required to make this work.

  Before this validator can be used the parse and format functions needs to be set. The parse function should take the value to parse (non null but otherwise untouched) and return the unix timestamp (in milliseconds) for that date or NaN if it's invalid.
  It's important to mention that the constraints (earliest, latest) will also be parsed using this method.

  The format function should take a unix timestamp (in milliseconds) and format it in a user friendly way.

  You can specify the follow constraints:
        earliest -  The date cannot be before this time. This argument will be parsed using the parse function, just like the value. The default error must be no earlier than %{date}
        latest - The date cannot be after this time. This argument will be parsed using the parse function, just like the value. The default error must be no later than %{date}
        dateOnly - If true, only dates (not datetimes) will be allowed. The default error is must be a valid date
  */
  datetime?: Datetime

  /** The date validator is just a shorthand for the datetime validator with the dateOnly option set to true. */
  date?: Datetime

  /**
  The email validator attempts to make sure the input is a valid email.
  Validating emails is tricky business due to the complex rules of email address formatting.

  For example john.doe@gmail is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end.

  Validate.js tries to be pragmatic and allows most valid emails but tries to catch common typos such as forgetting the TLD.
  If you want to know more about email validation the Wikipedia article and the email page on regular-expressions.info are good places to start.

  You can customize the regexp used by setting validate.validators.email.PATTERN to a regexp of your chosing, just remember that javascript regexp does substring matching.

  The default message is is not a valid email and as usual you can override it using the message option or by setting validate.validators.email.message
  */
  email?: Email

  /**
  The equality validator can be used to verify that one attribute is always equal to another.
  This is useful when having a "confirm password" input for example.

  You specify which attribute by simply using the name of it as the options for the validator or by giving the option attribute.

  By default === is used to check the quality, it you need to validate more complex objects you can give a function using the comparator option which should be a function that accepts two arguments and returns true if they objects are equal and false if they are not.

  The default message is is not equal to %{attribute} validate.validators.equality.message
  */
  equality?: Equality

  /**
  The exclusion validator is useful for restriction certain values.
  It checks that the given value is not in the lis
  You can specify within as a list or as an object (in which case the keys of the object are used).
  The default message is ^%{value} is restricted and can be changed by setting validate.validators.exclusion.message
  */
  exclusion?: ExclusionInclusion

  /**
    The format validator will validate a value against a regular expression of your chosing. The default message if the value doesn't match is invalid so you'll likely want to customize it by settings message to something in the options or by setting a new global default message using validate.validators.format.message

    The pattern option can either be a javascript regexp or string that will be passed to the RegExp constructor. If the pattern is a string and you want to specify flags you may use the flags option.

    Please note that the whole string must match the regexp, not just a part of the value.
  */
  format?: Format

  /** The inclusion validator is useful for validating input from a dropdown for example.
      It checks that the given value exists in the list given by the within option.

      You can specify within as a list or as an object (in which case the keys of the object are used).
      The default message is ^%{value} is not included in the list and can be changed by setting validate.validators.inclusion.message
  */
  inclusion?: ExclusionInclusion

  /** The length validator will check the length of a string.
      Any object with the length property can be validated but all the default error messages refers to strings so make sure you override them if you plan on validating arrays using this.

      You may specify the following length constraints:

            is - The value has to have exactly this length. The default error is is the wrong length (should be %{count} characters)
            minimum - The value cannot be shorter than this value. The default error is is too short (minimum is %{count} characters)
            maximum - The value cannot be longer than this value. The default error is is too long (maximum is %{count} characters)

      You can specify the error message using the notValid, wrongLength, tooShort and tooLong options. The default values are has an incorrect length, is the wrong length (should be %{count} characters), is too short (minimum is %{count} characters) and is too long (maximum is %{count} characters) respectively.
      As you may have noticed you can use %{count} as a placeholder for the actual constraint and it will be replaced for you.

      The default messages can also be changed by setting the following attributes on validate.validators.length:

            - notValid
            - tooLong
            - tooShort
            - wrongLength

      You can also use the message as the message for all errors (this overrides any other custom errors).
      Per default the number of characters are counted (using the length property), if you want to count something else you can specify the tokenizer option which should be a function that takes a single argument (the value) and the returns a value that should be used when counting.

      The tokenizer will never be called with nil or undefined as an argument.

      Once important thing to note is that the value needs to have a numeric value for the length property or the message has an incorrect length is returned.
      An error is also logged to the console since this is considered a coding error. */
  length?: Length

  /** The numericality validator will only allow numbers. Per default strings are coerced to numbers using the + operator. If this is not desirable you can set the noStrings option to true to disable this behaviour.

      The following constraints can be applied:

             onlyInteger - Real numbers won't be allowed. The error message is must be an integer
             strict - Enables more strict validation of strings. Leading zeroes won't be allowed and the number cannot be malformed.
             greaterThan - The input has to be greater than this value. The error message is must be greater than %{count}
             greaterThanOrEqualTo - The input has to be at least this value. The error message is must be greater than or equal to %{count}
             equalTo - The input has to be exactly this value. The error message is must be equal to %{count}
             lessThanOrEqualTo - The input can be this value at the most. The error message is must be less than or equal to %{count}
             lessThan - The input has to be less than this value. The error message is must be less than %{count}
             divisibleBy - The input has to be divisible by this value. The error message is must be divisible by %{count}
             odd - The input has to be odd. The error message is must be odd
             even - The input has to be even. The error message is must be even

      If you want a custom error message you may specify it using the message option or by settings specifying of the following messages:

             - notValid
             - notInteger
             - notGreaterThan
             - notGreaterThanOrEqualTo
             - notEqualTo
             - notLessThan
             - notLessThanOrEqualTo
             - notDivisibleBy
             - notOdd
             - notEven */
  numericality?: Numericality

  /** The presence validator validates that the value is defined. This validator will probably the most used one, it corresponds to HTML5's required attribute.
      You can use the message option to customize the message. The default message is can't be blank and can be changed by setting validate.validators.presence.message.

      These are the values that are considered empty:

          null
          undefined

      Additionally you can set the allowEmpty to false to disallow the following values:

          {} (empty objects)
          [] (empty arrays)
          "" (empty string)
          " " (whitespace only string)
          Important! All other values are considered valid (including functions)! */
  presence?: Presence

  /**
     The type validator ensures that the input is of the correct type. There are the following build in types.
           - array
           - integer
           - number
           - string
           - date
           - boolean
     In addition to these you can also create your own by adding them to validate.validator.type.types.

     The following options are supported:

           type - The type to use. Can also be a function for inline type checking. The function will receive the value, options, attribute name, all attributes and the global options respectively.
           message - A custom message. Can also be a function. The function will receive the value, options, attribute name, all attributes and the global options respectively.
  */
  type?: TypeValidate

  /** The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator follows a gist that can be found here.

                                          The following options are supported:

                                          message - The message if the validator fails. Defaults to is not a valid url
                                          schemes - A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example [".+"]). The default value is ["http", "https"].
                                          allowLocal - A boolean that if true allows local hostnames such as 10.0.1.1 or localhost. The default is false.
                                          allowDataUrl - A boolean that if true allows data URLs as defined in RFC 2397. The default is false */
  url?: URLValidate
}
