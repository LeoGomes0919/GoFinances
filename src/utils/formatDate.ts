const formatDate = (value: string): string =>
  Intl.DateTimeFormat('pt-br', {
    timeZone: 'UTC',
  }).format(new Date(value));

export default formatDate;
