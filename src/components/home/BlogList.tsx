import React from 'react'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'

const BlogList = async () => {
  const blogList = (await getAllBlogs()).slice(0, 4)

  return (
    <>
      {blogList.map((blog: BlogType) => (
        <BlogCard key={blog.slug} blog={blog} titleAs="h3" />
      ))}
    </>
  )
}

export default BlogList
