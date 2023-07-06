import { BlogInterface } from 'interfaces/blog';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobHireInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  blog?: BlogInterface[];
  project?: ProjectInterface[];
  user?: UserInterface;
  _count?: {
    blog?: number;
    project?: number;
  };
}

export interface JobHireGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
