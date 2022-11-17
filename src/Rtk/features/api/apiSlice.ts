import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    getBlog: builder.query({
      query: (blogId) => `/blogs/${blogId}`,
    }),
    editBlog: builder.mutation({
      query: ({ blogId, data }) => ({
        url: `/blogs/${blogId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useEditBlogMutation,
  useGetBlogQuery,
  useGetBlogsQuery,
} = apiSlice;
