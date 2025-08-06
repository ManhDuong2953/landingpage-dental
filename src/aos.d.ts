declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    easing?: string;
    [key: string]: any;
  }
  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
    [key: string]: any;
  };
  export default AOS;
}