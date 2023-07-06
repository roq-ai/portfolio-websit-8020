import axios from 'axios';
import queryString from 'query-string';
import { JobHireInterface, JobHireGetQueryInterface } from 'interfaces/job-hire';
import { GetQueryInterface } from '../../interfaces';

export const getJobHires = async (query?: JobHireGetQueryInterface) => {
  const response = await axios.get(`/api/job-hires${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createJobHire = async (jobHire: JobHireInterface) => {
  const response = await axios.post('/api/job-hires', jobHire);
  return response.data;
};

export const updateJobHireById = async (id: string, jobHire: JobHireInterface) => {
  const response = await axios.put(`/api/job-hires/${id}`, jobHire);
  return response.data;
};

export const getJobHireById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-hires/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobHireById = async (id: string) => {
  const response = await axios.delete(`/api/job-hires/${id}`);
  return response.data;
};
