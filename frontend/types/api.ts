type StrapiData<T> = {
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
