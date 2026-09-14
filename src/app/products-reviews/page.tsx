import { Product } from "../components/product";
import { Reviews } from "../components/reviews";
import { Suspense } from "react";
import Loading from '../../../../routing-demo/src/app/blog/loading';

export default function ProductReviews(){
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading product details...</p>} >
            <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reviews details...</p>} >
            <Reviews />
            </Suspense>
        </div>
    );
}