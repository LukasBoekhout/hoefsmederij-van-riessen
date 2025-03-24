export type StrapiData<T> = {
    id?: number;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale?: string;
} & T;

type StrapiMeta<T> = {} & T;

export interface StrapiApiObject<Data = object, Meta = object> {
    data: StrapiData<Data>;
    meta: StrapiMeta<Meta>;
}

export interface StrapiImage {
    id?: number;
    alternativeText?: string | null;
    caption?: string | null;
    createdAt?: string;
    documentId?: string;
    ext?: string;
    formats?: string | null;
    hash?: string;
    height?: string | null;
    mime?: string;
    name?: string;
    previewUrl?: string | null;
    provider?: string;
    provider_metadata?: string | null;
    publishedAt?: string;
    size?: number;
    updatedAt?: string;
    url?: string;
    width?: string | null;
}
