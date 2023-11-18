export interface IMember {
  id: number | string;
  name?: string;
  role?: string;
  avatar?: string;
  online?: boolean;
  currentTask?: string;
  todayDuration?: number;
  thisWeekDuration?: number;
}