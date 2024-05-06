export const cn = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ");
};


export const formartDate = (date_string: string) => {
  const date = new Date(date_string);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric", // Add day field
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};