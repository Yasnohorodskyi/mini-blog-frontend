import { TypePageSkeleton } from '../types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { ContentImage, parseContentfulContentImage } from './contentImage'

export type PageEntry = Entry<TypePageSkeleton, undefined, string>

export interface IPageBanner {
  title: string
  pageContent: RichTextDocument | null
  pageImage: ContentImage | null
}

export interface IPage extends IPageBanner {
  postsSectionTitle: string
}

export const parseContentfulPage = (pageEntry?: PageEntry): IPage | null => {
	if (!pageEntry) {
		return null
	}

	return {
		title: pageEntry.fields.title || '',
		pageContent: pageEntry.fields.pageContent || null,
		pageImage: parseContentfulContentImage(pageEntry.fields.pageImage),
    postsSectionTitle: pageEntry.fields.postsSectionTitle,
	}
}