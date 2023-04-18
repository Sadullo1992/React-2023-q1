const dateFormatter = (date: string | null) => {
  if (!date) return date;
  return date.slice(0, 10).split('-').reverse().join('/');
};

export default dateFormatter;
