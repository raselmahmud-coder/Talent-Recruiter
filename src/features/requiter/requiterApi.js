import { APIsSlice } from "../APIs/APIsSlice";

export const requiterApi = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({

    getOwnJobList: builder.query({
      query: () => {
        return {
          url: `/api/requiter/get-job-via-requiter`,
          method: "GET",
        };
      },
    }),
    postJob: builder.mutation({
      query: (body) => {
        // console.log(body);
        return {
          url: `/api/requiter/post-job`,
          method: "POST",
          body,
        };
      },
    }),
    deleteJob: builder.mutation({
      query: ({ id }) => {
        // console.log(body);
        return {
          url: `/api/requiter/delete-job/${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { usePostJobMutation , usegetOwnJobListQuery,  useDeleteJobMutation, } = requiterApi;