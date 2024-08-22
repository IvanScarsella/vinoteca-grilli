import { groq } from "next-sanity";

export const productsQuery = groq`*[_type == "product"]`;

export const productQuery = groq`*[_type == "product" && slug.current == $slug][0]{
name, price, description, image, stock, slug
}`

export const productPathsQuery = groq`*[_type == "product" && defined(slug.current)][]{
"params": {"slug":slug.current}
}`