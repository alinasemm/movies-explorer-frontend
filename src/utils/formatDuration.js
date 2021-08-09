export function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  const stringMinutes = `${minutes}`.padStart(2, '0');
  if (hours === 0) {
    return `${stringMinutes}м`;
  }

  return `${hours}ч ${stringMinutes}м`;
}
