export function progressTime(number) {
  var minutes = Math.floor(number / 60);
  var second = Math.floor(number - minutes * 60);
  return `${twoDigits(minutes)}:${twoDigits(second)}`
}

function twoDigits(number) {
  return ('0' + number).slice(-2);
}
