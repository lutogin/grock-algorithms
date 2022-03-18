const scheduleLessons = [
  {
    title: 'english',
    from: new Date('2022-01-01 11:00:00'),
    to: new Date('2022-01-01 12:00:00'),
  },
  {
    title: 'math',
    from: new Date('2022-01-01 09:00:00'),
    to: new Date('2022-01-01 10:00:00'),
  },
  {
    title: 'literature',
    from: new Date('2022-01-01 09:30:00'),
    to: new Date('2022-01-01 10:30:00'),
  },
  {
    title: 'physics',
    from: new Date('2022-01-01 10:00:00'),
    to: new Date('2022-01-01 11:00:00'),
  },
  {
    title: 'gym',
    from: new Date('2022-01-01 10:30:00'),
    to: new Date('2022-01-01 11:30:00'),
  },
];

const timeFrame = {
  from: new Date('2022-01-01 09:00:00'),
  to: new Date('2022-01-01 12:00:00'),
};



function makeSchedule(timeFrame, schedule) {
  const copyOfSchedule = schedule.slice();
  copyOfSchedule.sort((a, b) => a.to - b.to);

  const correctSchedule = [copyOfSchedule[0]];

  for (let i = 1; i < copyOfSchedule.length; i++) {
    if (
      copyOfSchedule[i].to <= timeFrame.to
      && copyOfSchedule[i].from >= timeFrame.from
      && copyOfSchedule[i].from >= correctSchedule[correctSchedule.length - 1].to
    ) {
      correctSchedule.push(copyOfSchedule[i]);
    }
  }

  return correctSchedule;
}

makeSchedule(timeFrame, scheduleLessons);