export interface IExperience {
  id?: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  impactMetric: string;
  description: string;
  tasks: string[];     // Array of strings for bullet points
  techStack: string[]; // Array of strings for technology tags
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IActionResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface IDeleteResponse {
  success: boolean;
  id?: number;
  error?: string;
}