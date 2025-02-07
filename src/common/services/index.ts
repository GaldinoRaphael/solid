import { CATEGORIES_BASE_URL } from "../constants/endpoints";
import { IHttp } from "../lib/httpClient/http.interface";
import { Category } from "../types/category";
import { ICategoryService } from "./ICategoryService";

const CategoryService = (http: IHttp): ICategoryService => {
    return {
        fetchCategories: async () => {
            const response = await http.get<{categories: Category[]}>(CATEGORIES_BASE_URL);
            const data = await response.categories;
            return data;
        }
    }
}

export default CategoryService;