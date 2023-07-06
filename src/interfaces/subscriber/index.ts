import { UserInterface } from 'interfaces/user';
import { BlogInterface } from 'interfaces/blog';
import { GetQueryInterface } from 'interfaces';

export interface SubscriberInterface {
  id?: string;
  user_id?: string;
  blog_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  blog?: BlogInterface;
  _count?: {};
}

export interface SubscriberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  blog_id?: string;
}
