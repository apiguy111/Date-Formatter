export const formatDateTime = (dateTimeString) => {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDateTime = new Date(dateTimeString).toLocaleString(
    undefined,
    options
  );

  return formattedDateTime;
};
