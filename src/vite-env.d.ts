/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_TEST_MEMBER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
