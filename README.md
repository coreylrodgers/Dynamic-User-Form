## Dynamic Schema based Form Generation
This is a schema based form generation app, there are 3 form objects i've setup to demo the dynamic generation of forms through the Form component which taskes a schema as a prop.

## Rendering different forms
Switch out the schema object currently set to 'signUp' with the other imported objects from the formOptions file. for example mailingList or Feedback form.

### To Get up and running
 - Yarn install or NPM install
 - Start the app by running yarn start or npm start

### Form Schema
Form Schema is configured in the libs/formOptions file. Here you can edit the fields that are shown when the form is rendered.

In this example i've made 3 form objects that will render different components depending on their schema definition. In this demo you can choose from 3 options.
- Mailing List
- Sign Up
- Feedback Form

These can be switched out in the App.js file 

### Visual Libraries used
The package I used for the UI: Material UI core

### Helper Libraries used
Used MomentJS for time calculation for OverMinimum Age function

### CSS Framework used
Used Styled-Components for Component styling and renaming in order to keep the naming conventions consistent.
