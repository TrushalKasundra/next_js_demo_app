
const rules = {
    contactUs: {
      email: [
        { required: true, message: "Email is required." },
        {
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "The input is not valid E-mail!",
        },
      ],
      message: [
        {
          min:3,
          message: "Enter minimum 3 chracter",
        },
        {
          max:500,
          message: "Enter maximum 500 chracter",
        },
      ],
      name: (name: string) => [
        { required: true, message: `${name} is required.` },
      ],
      catcha: (name: string, captcha: string) => [
        { required: true, message: `${name} is required.` },
        ({ getFieldValue }: any) => ({
          validator(_: any, value: any) {
            if (!value || captcha === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("The Captcha that you entered do not match!")
            );
          },
        }),
      ],
    },
    SimpleCalendar: {
      year:[ { required: true, message: "Year is required." }],
      month: [ { required: true, message: "Month is required." },]
    }
  };
  
  export default rules;
  