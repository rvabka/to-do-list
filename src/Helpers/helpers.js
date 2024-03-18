var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function validityTime(date) {
  const parts = date.split("-"); // data wprowadzona przez usera
  const partsMonth = parts[1][0] == 0 ? parts[1][1] : parts[1]; // żeby wszędzie była sama 3, a nie 03
  const partsDay = parts[2][0] == 0 ? parts[2][1] : parts[2];
  const currentDate = new Date();
  const year = currentDate.getFullYear(); // data obecna [rok]
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  if (parts[0] > year) {
    return `Until ${parts[0]} ${months[partsMonth - 1]}`;
  } else if (partsMonth > month) {
    return `Until ${parts[2]} ${months[partsMonth - 1]}`;
  } else if (partsDay > day) {
    return `Until ${parts[2]} ${months[partsMonth - 1]}`;
  } else if (partsMonth == month && day == partsDay) {
    return `Today`;
  } else if (partsMonth == month && day + 1 == partsDay) {
    return `Tomorrow`;
  } else {
    return `You are late`;
  }
}
