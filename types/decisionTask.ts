export type DecisionTask = {
  applicationId: number;
  provider: string;
  type: string;
  register: string[];
  taskType: string;
  startDate: string;
  dueDate: string;
  started: boolean;
  allocatedTo?: string;
}