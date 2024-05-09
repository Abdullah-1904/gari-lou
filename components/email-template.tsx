import * as React from "react";

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div>
    <h1>Congratulations,</h1>
    <h2>
      You have made a booking on Gar-Lou, Best Rent a Car application in
      Pakistan.{" "}
    </h2>
    <h2>
      For futher details, log on to{" "}
      <b>https://gari-lou-abdullah-1904s-projects.vercel.app/</b>{" "}
    </h2>
  </div>
);
