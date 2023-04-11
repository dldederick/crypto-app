import React from 'react';

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
