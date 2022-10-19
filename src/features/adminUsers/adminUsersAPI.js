import { APIsSlice } from "../APIs/APIsSlice";
// import { login } from "./userAuthSlice";
const roleHeader = {
  role: "admin",
};
export const adminUsersAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetUsers: builder.query({
      query: (query = 0) => ({
        url: "/api/admin/get-users",
        method: "GET",
        headers: roleHeader,
      }),
      providesTags: ["adminUsers"],
    }),
    adminUpdateUser: builder.mutation({
      query: ({ id, role }) => ({
        url: `/api/admin/update-user-role/${id}`,
        method: "PATCH",
        body: { role }, //what role to update
        headers: roleHeader,
      }),
    }),
    adminWarningUser: builder.mutation({
      query: (email) => ({
        url: `api/admin/warning-user`,
        method: "POST",
        body: { email },
        headers: roleHeader,
      }),
    }),
    adminDeleteUser: builder.mutation({
      query: (id) => ({
        url: `api/admin/delete-user/${id}`,
        method: "DELETE",
        headers: roleHeader,
      }),
      invalidatesTags: ["adminUsers"],
    }),
  }),
});
export const {
  useAdminGetUsersQuery,
  useAdminWarningUserMutation,
  useAdminUpdateUserMutation,
  useAdminDeleteUserMutation,
} = adminUsersAPI;
