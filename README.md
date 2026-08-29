# 신촌쿵야 Frontend

대학생 단체 술자리를 위한 **역경매 기반 예약 매칭 플랫폼** 신촌쿵야의 프론트엔드 클라이언트입니다.

학생이 인원, 예약 일시, 희망 지역과 예산을 담아 예약 요청을 등록하면, 조건에 맞는 가게가 가격과 혜택을 제안합니다. 학생은 여러 제안을 비교해 하나를 선택하고 예약을 체결할 수 있습니다.

## 서비스 소개

기존 단체 예약은 학생이 여러 가게에 직접 연락해 수용 가능 인원과 가격, 제공 혜택을 반복해서 확인해야 합니다.

신촌쿵야는 이 과정을 예약 요청과 가게의 제안을 중심으로 단순화합니다.

```text
학생이 단체 예약 요청 등록
        ↓
가게가 조건에 맞는 예약 요청 확인
        ↓
사장님이 가격·할인·혜택을 담은 제안 등록
        ↓
학생이 여러 제안 비교
        ↓
제안 수락 및 예약 체결
```

### 주요 기능

- 학생·사장님 역할별 온보딩
- 학생의 단체 예약 요청 등록
- 사장님의 가게 및 메뉴 등록
- 사장님의 예약 요청 확인 및 제안 작성
- 학생의 가게별 제안 목록·상세 조회
- 제안 수락 및 예약 체결
- 학생·사장님 마이페이지와 예약 내역 확인
- 모바일 환경에 최적화된 UI
- Axios 인스턴스를 활용한 백엔드 REST API 연동

## 팀원 소개

| 팀원 | 역할 | 주요 기여 |
| --- | --- | --- |
| 이주희 | Frontend | 학생 온보딩, 예약 요청·제안 확인, 학생 마이페이지, API 연동 |
| 유하은 | Frontend | 사장님 온보딩, 제안·마이페이지, 가게·메뉴 API 연동, 공통 API 설정 |

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Language | JavaScript, TypeScript |
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| HTTP Client | Axios |
| State Management | React Context API, React Hooks |
| Client Storage | Web Storage API (LocalStorage) |
| Code Quality | ESLint 10 |
| Package Manager | npm |
| Deployment | Vercel |

## 시작하기

### 요구 사항

- Node.js 20 이상
- npm

### 설치 및 실행

```bash
git clone https://github.com/2026-Sinchonthon/Team1-Frontend.git
cd Team1-Frontend
npm install
```

프로젝트 루트에 `.env` 파일을 만들고 백엔드 API 주소를 설정합니다.

```env
VITE_API_BASE_URL=https://example.com
```

개발 서버를 실행합니다.

```bash
npm run dev
```

### 주요 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run preview` | 프로덕션 빌드 로컬 미리보기 |
| `npm run lint` | ESLint 코드 검사 |

## 프로젝트 구조

```text
src
├── apis                         # Axios 인스턴스 및 도메인별 API
│   └── types                    # API 관련 타입
├── assets
│   └── icons                    # 이미지와 아이콘 리소스
├── components
│   ├── common                   # 공통 컴포넌트
│   ├── my                       # 학생 마이페이지 컴포넌트
│   ├── onboarding              # 학생 온보딩 컴포넌트
│   ├── owner                   # 사장님 공통 컴포넌트
│   └── proposal                # 제안 관련 컴포넌트
├── layouts                      # 공통 페이지 레이아웃
├── mocks                        # 개발용 목 데이터
└── pages
    ├── my                       # 학생 마이페이지
    ├── onboarding
    │   ├── owner                # 사장님 온보딩
    │   └── reservation          # 학생 예약 온보딩
    ├── owner
    │   ├── mypage               # 사장님 마이페이지
    │   └── proposal             # 사장님 제안 관리
    └── proposal                 # 학생 제안 목록·상세
```

---

# 📐 Convention

## 🌿 Branch Strategy

| Branch | Description |
| --- | --- |
| `main` | 배포 브랜치 |

## 💬 Commit Convention

| Type | Description |
| --- | --- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 |
| `chore` | 설정 및 기타 작업 |

커밋 메시지는 `type: 작업 내용` 형식을 사용합니다.

```text
feat: 학생 예약 요청 API 연동
fix: 모바일 화면 하단 내비게이션 잘림 수정
```

## 🔀 Pull Request

- AI Code Review 결과를 확인하고 필요한 내용을 반영합니다.
- 팀원 1명 이상의 Approve 후 Merge합니다.
- PR 제목은 `Type 구현 내용` 형식을 사용합니다.

```text
Feat 학생 예약 요청 API 연동
```
