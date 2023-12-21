import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/prdoucts";
import MeowArticle from "@/components/MeowArticle";

export default async function ProductsPage() {
  throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
