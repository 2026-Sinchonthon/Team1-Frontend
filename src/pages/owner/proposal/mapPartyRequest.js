const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function pad2(n) {
  return String(n).padStart(2, '0');
}

function formatDates(reservedAt) {
  const date = new Date(reservedAt);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = WEEKDAYS[date.getDay()];
  const time = `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;

  return {
    dateShort: `${month}월 ${day}일 ${time}`,
    visitDateShort: `${month}월 ${day}일 (${weekday}) ${time}`,
    visitDateFull: `${date.getFullYear()}년 ${month}월 ${day}일 (${weekday}) ${time}`,
  };
}

function formatDDay(reservedAt) {
  const target = new Date(reservedAt);
  const now = new Date();
  const diffDays = Math.ceil((target - now) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return '마감';
  if (diffDays === 0) return 'D-day';
  return `D-${diffDays}`;
}

function formatWon(amount) {
  return `${amount.toLocaleString('ko-KR')}원`;
}

function formatManwon(amount) {
  return `${Math.round(amount / 10000).toLocaleString('ko-KR')}만원`;
}

// 백엔드 PartyRequestSummaryRes/DetailRes -> 화면에서 쓰는 형태로 변환
export function mapPartyRequest(raw) {
  const dates = formatDates(raw.reservedAt);

  return {
    id: raw.id,
    emoji: '🎉',
    emojiBg: '#ebf3fe',
    groupName: raw.groupName,
    dDay: formatDDay(raw.reservedAt),
    ...dates,
    headcount: raw.headcount,
    tableCount: raw.tableCount,
    purpose: raw.purpose,
    purposeTag: raw.purpose,
    headcountLabel: `${raw.headcount}명 (${raw.tableCount}테이블)`,
    budgetPerTable: formatWon(raw.perTableFoodBudget),
    budgetPerTableLabel: `테이블당 ${formatWon(raw.perTableFoodBudget)}`,
    totalBudget: formatManwon(raw.totalBudget),
    totalBudgetRaw: raw.totalBudget,
  };
}
