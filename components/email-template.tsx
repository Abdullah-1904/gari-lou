import * as React from "react";

interface EmailTemplateProps {}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({}) => (
  <div>
    <h1>Hello, !</h1>
    <h2>Your request has been approved. Thanks for using Gari-lou</h2>
  </div>
);
