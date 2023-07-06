import { JobHireInterface } from 'interfaces/job-hire';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description: string;
  link: string;
  job_hire_id?: string;
  created_at?: any;
  updated_at?: any;

  job_hire?: JobHireInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  link?: string;
  job_hire_id?: string;
}
