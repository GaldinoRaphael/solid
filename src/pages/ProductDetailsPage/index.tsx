import { useParams } from "react-router-dom";

import Styles from "./ProductDetailsPage.module.css";
import Typography from "../../components/Typography";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { PRODUCTS_BASE_URL } from "../../common/constants/endpoints";
import { Product } from "../../common/types/product";
import StatusHandler from "../../common/utils/statusHandler";
import { Banner } from "../../components/Banner";
import useFetch from "../../common/hooks/useFetch";

type ProductDetailsPageProps = {
  addToCart: (product: Product) => void;
};

function ProductDetailsPage({ addToCart }: ProductDetailsPageProps) {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL

  const {data: productsdata, loading: isLoading, error} = useFetch<{products: Product[]}>(PRODUCTS_BASE_URL);

  const product = productsdata?.products.find((product) => product.id.toString() === id);

  return (
    <>
      <Banner backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-seceos-tablet.png" />
      <main className="container">
        <section>
          <div className={Styles.productContainer}>
            <Typography variant="h4">Detalhes do Produto</Typography>

            <StatusHandler isLoading={isLoading} error={error}>
              {product ? (
                <ProductDetail
                  id={product.id}
                  title={product.label}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageSrc}
                  colors={product.colors}
                  addToCart={addToCart}
                />
              ) : (
                <p>Produto não encontrado.</p>
              )}
            </StatusHandler>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetailsPage;
