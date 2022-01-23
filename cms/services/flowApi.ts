import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config';
import mockBaseQuery from './mockBaseQuery';
import { IFlow } from './types';

export const FLOW_API_REDUCER_KEY = 'FLOW_API';
export const flowApi = createApi({
  reducerPath: FLOW_API_REDUCER_KEY,
  baseQuery: mockBaseQuery({
    baseUrl: config.core.endpoint,
  }),
  endpoints: (builder) => ({
    getFlow: builder.query({
      query: () => ({ url: `/flows`, method: 'GET', data: null }),
    }),
  }),
});

export const { useGetFlowQuery } = flowApi;
