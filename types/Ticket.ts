import { IMember } from "./Member";

export interface ITicket {
  id: number | string;
  title: string;
  description: string;
  createAt: number;
  updateAt?: number;
  status: string;
  tags?: string[];
  customers: Array<IMember>;
  duration?: number;
  estimateComplete?: number;
  category: string | null;
  categoryTypes: string[];
  files: any[];
  priority: 'Low' | 'Med' | 'High' | 'Urgent' | null;
  sla: string;
  memberIds: Array<string | number>;
}