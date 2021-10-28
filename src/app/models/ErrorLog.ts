export interface ErrorLog {
  id: number;
  level: string;
  description: string;
  log?: string;
  origin: string;
  createdAt?: Date;
}
