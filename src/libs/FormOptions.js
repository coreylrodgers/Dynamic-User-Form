const signUp = {
  title: "Sign Up",
  description: "Sign up form",
  type: "sign-up",
  properties: [
    {
      type: "string",
      title: "Full Name",
      required: true,
      name: "fullName",
    },
    {
      type: "date",
      title: "Date of Birth",
      required: true,
      minimumAge: 18,
      default: Date.now(),
      name: "dateOfBirth",
    },
    {
      type: "dropdown",
      title: "Gender",
      name: "gender",
      options: [
        { label: "Male", value: 1 },
        { label: "Female", value: 2 },
        { label: "Prefer not to say", value: 3 },
      ],
    },
    {
      required: true,
      type: "string",
      title: "Mobile Number",
      default: "000000",
      name: "mobileNumber",
    },

    {
      type: "string",
      title: "Home Number",
      default: "000000",
      name: "homeNumber",
    },

    {
      type: "checkbox",
      title: "Require Guardian Consent",
      default: false,
      name: "guardianConsent",
    },

    {
      type: "string",
      title: "Guardian Full Name",
      optional: true,
      name: "guardianFullName",
    },
    {
      type: "string",
      title: "Guardian Contact Number",
      optional: true,
      name: "guardianContactNumber",
    },
  ],
};

const mailingList = {
  title: "Mailing List",
  description: "Sign Up to our weekly newsletter",
  properties: [
    {
      type: "checkbox",
      title: "Do you want to receive our weekly newsletter?",
      required: true,
    },
    {
      type: "checkbox",
      title: "Would you like to recieve promotional offers and vouchers?",
      required: true,
    },
    {
      type: "string",
      title: "What's your email address?",
    },
  ],
  submit: true,
};
const feedbackForm = {
  title: "Feedback Form",
  description: "Tell us what you think?",
  properties: [
    { required: true, type: "string", title: "Full Name" },
    {
      type: "textArea",
      title: "What do you enjoy about our app?",
      large: true,
      rows: 5,
    },
    {
      type: "dropdown",
      title: "Would you reccommend us to a friend?",
      options: [
        { label: "Yes", value: 10 },
        { label: "No", value: 20 },
        { label: "Maybe", value: 30 },
      ],
    },

    {
      type: "string",
      title: "Home Number",
      default: "000000",
    },
  ],
};

export { signUp, feedbackForm, mailingList };
