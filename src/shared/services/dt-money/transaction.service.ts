import { dtMoneyApi } from "@/shared/api/dt-money";
import { TransactionCategory } from "@/shared/interfaces/transaction-category-response";

export const getTransactionCategories = async (): Promise<
  TransactionCategory[]
> => {
  const { data } = await dtMoneyApi.get("/transaction/categories");

  return data;
};
