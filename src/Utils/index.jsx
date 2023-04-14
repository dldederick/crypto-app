import React from 'react';
import { Redirect } from 'react-router-dom';

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

export const capitalize =  (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

