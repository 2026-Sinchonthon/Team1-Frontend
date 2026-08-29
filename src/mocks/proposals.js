export const proposalRequest = {
  dateTime: '8월 31일 19:30',
  groupName: '멋사대학',
  guests: 12,
  tableCount: 3,
};

export const proposals = [
  {
    id: 1,
    address: '종로구 대학로 27',
    emoji: '🍺',
    emojiBackground: '#ebf3fe',
    preview: '제안 내용 미리보기',
    storeName: '포차이십칠',
    message: '단체 회식 전문 포차입니다. 야외 테라스 단독 섹션으로 프라이빗한 술자리를 즐기실 수 있어요. 테이블당 소주·맥주 세트와 안주 2종을 기본 제공합니다.',
    pricePerTable: 65000,
    totalPrice: 195000,
    recommendations: [
      { id: 1, title: '소맥 기본 세트 🍺', items: ['소주 2병', '맥주 4캔', '땅콩 안주'] },
      { id: 2, title: '야식 한상 세트 🥘', items: ['부대찌개 (2인 공유)', '계란말이', '오뎅탕'] },
    ],
  },
  {
    id: 2,
    address: '마포구 홍익로 11',
    emoji: '🥩',
    emojiBackground: '#fff0eb',
    preview: '제안 내용 미리보기',
    storeName: '홍대 민들레 포차',
  },
  {
    id: 3,
    address: '마포구 와우산로 83',
    emoji: '🍶',
    emojiBackground: '#f0f7ee',
    preview: '제안 내용 미리보기',
    storeName: '술빚는 마을',
  },
];
