import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  tagTypes: ["blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogs"],
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
      invalidatesTags: ["blogs"],
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
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
