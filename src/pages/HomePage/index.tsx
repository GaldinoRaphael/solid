import Button from "../../components/Button";
import Categories from "../../components/Categories";
import HeroBanner from "../../components/HeroBanner";
import Newsletter from "../../components/Newsletter";
import ProductList from "../../components/ProductList";
import Typography from "../../components/Typography";
import {
  PRODUCTS_BASE_URL,
} from "../../common/constants/endpoints";
import { Product } from "../../common/types/product";
import StatusHandler from "../../common/utils/statusHandler";
import useFetch from "../../common/hooks/useFetch";
import useFetchCategory from "../../common/hooks/useFetchCategory";
import { ICategoryService } from "../../common/services/ICategoryService";
import Http from "../../common/lib/httpClient";
import { IHttp } from "../../common/lib/httpClient/http.interface";
import CategoryService from "../../common/services";

const http: IHttp = Http();
const service: ICategoryService = CategoryService(http);

function HomePage() {

  const handleSubscribe = (email: string) => {
    console.log(`Usuário inscrito com o email: ${email}`);
  };

  // Fetch de categorias
  const {categories, isLoadingCategories, categoriesError } = useFetchCategory(service);

  console.log(categories, Array.isArray(categories)); 

  const {data: productsData, loading: isLoadingProducts, error: productsError } = useFetch<{products: Product[]}>(PRODUCTS_BASE_URL);

  return (
    <>
      <HeroBanner
        backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-seceos-tablet.png"
        mainImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/8df6d50256e4b270eb794ccbc0314baf2a656211/hero.png"
      >
        <Typography variant="h1">
          Hora de abraçar seu{" "}
          <span style={{ color: "#8fff24" }}>lado geek!</span>
        </Typography>
        <Button
          onClick={() => console.log("ver novidades")}
          size="large"
        >Ver as novidades!</Button>
      </HeroBanner>
      <main className="container">
        <StatusHandler isLoading={isLoadingCategories} error={categoriesError}>
          { categories ? <Categories categories={categories} /> : null }
        </StatusHandler>

        <StatusHandler isLoading={isLoadingProducts} error={productsError}>
          { productsData?.products ? <ProductList title="Produtos em destaque" products={productsData.products} /> : null }
        </StatusHandler>
      </main>
      <Newsletter onSubscribe={handleSubscribe} />
    </>
  );
}

export default HomePage;
