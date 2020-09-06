const signUp = {
  title: "Sign Up",
  description: "Sign up form",
  type: "sign-up",
  properties: [
    {
      type: "string",
      title: "Full Name",
    },
    {
      type: "date",
      title: "Date of Birth",
      required: true,
      minimumAge: 18,
      default: Date.now(),
    },
    {
      type: "dropdown",
      title: "Gender",
      options: ["male", "female", "prefer not to say"],
    },
    {
      type: "string",
      title: "Mobile Number",
      default: "000000",
    },

    {
      type: "string",
      title: "Home Number",
      default: "000000",
    },

    {
      type: "checkbox",
      title: "Require Guardian Consent",
      default: false,
    },

    {
      type: "string",
      title: "Guardian Full Name",
      optional: true,
    },
    {
      type: "string",
      title: "Guardian Contact Number",
      optional: true,
    },
    {
      type: "dropdown",
      title: "Guardian Gender",
      optional: true,
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
    {
      type: "string",
      title: "Full Name",
    },
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
