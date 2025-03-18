const currentDate = new Date()
const options: Intl.DateTimeFormatOptions = { year: 'numeric' };

export const currentYear = new Intl.DateTimeFormat('en-US', options).format(currentDate);