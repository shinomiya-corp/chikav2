declare namespace NodeJS {
  export interface ProcessEnv {
    APP_TOKEN: string;
    NODE_ENV: string;
    REDIS_URL: string;
    ANILIST_SCHEMA: string;
  }
}
