export function dateFormatter(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {},
): string {
  const date = new Date(dateString);

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  const formatOptions = { ...defaultOptions, ...options };

  return date.toLocaleDateString("es-ES", formatOptions);
}
