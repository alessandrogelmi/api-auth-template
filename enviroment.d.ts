declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      MONGO_URI: string;
      TOKEN_KEY: string;
      REFRESH_TOKEN_KEY: string;
    }
  }
}

export {};
