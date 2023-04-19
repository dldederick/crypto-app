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