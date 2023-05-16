export const readableNum = (num) => {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixIndex = 0;
  while (num >= 1000 && suffixIndex < suffixes.length - 1) {
    num /= 1000;
    suffixIndex++;
  }
  const roundedNum = Math.round(num * 100) / 100;
  return roundedNum + suffixes[suffixIndex];
}

export const roundedNum = (num) => {
  return Math.round(num * 100) / 100
}

export const roundedPercentage = (num) => {
  return num.toFixed(2).padStart(4, '0');
}

export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function capitalLetter(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.toLocaleString('default', {month: 'short'});
  const day = date.getDate();
  const formattedDate = `${month} ${day}`;
  return formattedDate
}

export const formatChartPrices = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return num.toString();
    }
}

export function currentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthAbbreviation = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${monthAbbreviation} ${day} ${year}`;
  return formattedDate
}

export function convertDate(date) {
const isoDate = date;
const newDate = new Date(isoDate);
const formattedDate = newDate.toLocaleDateString();
const formattedTime = newDate.toLocaleTimeString().replace(/:\d\d\s/,' ');
const formattedDateTime = `${formattedDate} ${formattedTime}`;
return formattedDateTime;
}

export function convertToUnixTimestamp(dateString) {
  const [month, day, year] = dateString.split('/');
  const date = new Date(`${year}-${month}-${day}`);
  const unixTimestamp = Math.floor(date.getTime() / 1000);
  return unixTimestamp;
};

export function openInNewTab(url) {
  window.open(url, '_blank',  'noreferrer' )
}