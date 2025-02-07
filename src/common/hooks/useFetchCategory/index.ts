import { useEffect, useState } from "react";
import { ICategoryService } from "../../services/ICategoryService";
import { Category } from "../../types/category";

const useFetchCategory = (service: ICategoryService) => {
    
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [isLoadingCategories, setIsLoading] = useState(true);
    const [categoriesError, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await service.fetchCategories();
                setCategories(categories);
                setIsLoading(false);
            } catch (error) {
                setError("Ocorreu um erro ao buscar os dados");
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, [service])

    return { categories, isLoadingCategories, categoriesError }
}

export default useFetchCategory;