import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypePageFields {
  title: EntryFieldTypes.Symbol;
  pageContent: EntryFieldTypes.RichText;
  pageImage?: EntryFieldTypes.AssetLink;
  slug: EntryFieldTypes.Symbol;
  postsSectionTitle: EntryFieldTypes.Symbol;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePageSkeleton, Modifiers, Locales>;
