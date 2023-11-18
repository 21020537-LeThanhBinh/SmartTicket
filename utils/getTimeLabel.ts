export function getTimeLabel() {
  const date = new Date();

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' } as const;
  const timeLabel = date.toLocaleDateString('en-US', options);
  return timeLabel.split(' ')[0] + ' ' + timeLabel.split(' ')[1] + ' ' + timeLabel.split(' ')[2] + ' ' + timeLabel.split(' ')[3].replace(',', '') + ' | ' + timeLabel.split(' ')[4] + ' ' + timeLabel.split(' ')[5];
}