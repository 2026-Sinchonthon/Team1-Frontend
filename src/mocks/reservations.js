export const reservations = [
  {
    id: 1,
    date: new Date(2026, 7, 31),
    dateLabel: '2026년 8월 31일 월요일',
    emoji: '🍺',
    guests: 23,
    summaryGuests: 34,
    name: '포차이십칠',
    phone: '02-1234-5678',
    tableCount: 6,
    time: '17:30',
    orderItems: [
      { id: 1, name: '소주·맥주 세트', price: 18000, quantity: 6 },
      { id: 2, name: '파전', price: 15000, quantity: 6 },
    ],
    serviceItem: '계란찜',
    totalPrice: 198000,
  },
];

export const confirmedReservation = reservations[0];
