import { TypeBlogPostSkeleton } from '../types';
import { Entry } from 'contentful';
import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { ContentImage, parseContentfulContentImage } from './contentImage';

export type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;

export interface IBlogPostShort {
  title: string;
  slug: string;
  postImage: ContentImage | null;
}

export interface IBlogPost {
  title: string;
  slug: string;
  content: RichTextDocument | null;
  postImage: ContentImage | null;
}

export const parseContentfulBlogPostShort = (
  blogPostEntry?: BlogPostEntry
): IBlogPostShort | null => {
  if (!blogPostEntry) {
    return null;
  }

  return {
    title: blogPostEntry.fields.title || '',
    slug: blogPostEntry.fields.slug,
    postImage: parseContentfulContentImage(blogPostEntry.fields.postImage),
  };
};

export const parseContentfulBlogPost = (
  blogPostEntry?: BlogPostEntry
): IBlogPost | null => {
  if (!blogPostEntry) {
    return null;
  }

  return {
    title: blogPostEntry.fields.title || '',
    slug: blogPostEntry.fields.slug,
    content: blogPostEntry.fields.content || null,
    postImage: parseContentfulContentImage(blogPostEntry.fields.postImage),
  };
};
