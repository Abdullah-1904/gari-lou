export const cn = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ");
};

export const formartDate = (date_string: string) => {
  if (!date_string) return "";
  const date = new Date(date_string);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
