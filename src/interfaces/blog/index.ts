import { SubscriberInterface } from 'interfaces/subscriber';
import { JobHireInterface } from 'interfaces/job-hire';
import { GetQueryInterface } from 'interfaces';

export interface BlogInterface {
  id?: string;
  title: string;
  content: string;
  job_hire_id?: string;
  created_at?: any;
  updated_at?: any;
  subscriber?: SubscriberInterface[];
  job_hire?: JobHireInterface;
  _count?: {
    subscriber?: number;
  };
}

export interface BlogGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  job_hire_id?: string;
}
