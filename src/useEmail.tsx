import emailjs from "@emailjs/browser";

export default function sendEmail(email: string, message: string) {
  emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    {
      from_name: email,
      message,
    },
    "AS65UM_InnVc4PfvU"
  );
}
