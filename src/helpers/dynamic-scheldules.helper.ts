const BASE_SCHEDULES = [
  "T11:30:00Z",
  "T13:00:00Z",
  "T15:00:00Z",
  "T17:00:00Z",
  "T19:00:00Z",
  "T21:00:00Z",
];

function getLocalDateLATAM(timeZone = 'America/Lima'): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date());
}

// "30 ago. 2026, 8:00 a. m."
const labelFormatter = new Intl.DateTimeFormat('es-PE', {
  timeZone: 'America/Lima',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

// "8:00 a. m."
const labelShortFormatter = new Intl.DateTimeFormat('es-PE', {
  timeZone: 'America/Lima',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

export const dynamicSchedules = () => {
  const localDate = getLocalDateLATAM();

  return BASE_SCHEDULES.map((schedule) => {
    const isoString = `${localDate}${schedule}`;
    const dateObj = new Date(isoString);

    return {
      labelText: labelFormatter.format(dateObj).replace(/\u202F|\u00A0/g, ' '),
      labelButton: labelShortFormatter.format(dateObj).replace(/\u202F|\u00A0/g, ' '),
      value: isoString,
    };
  });
};