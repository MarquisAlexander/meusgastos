import { dtMoneyApi } from "@/shared/api/dt-money";
import { CreateTransactionInterface } from "@/shared/interfaces/https/create-transaction-request";
import { TransactionCategory } from "@/shared/interfaces/transaction-category-response";

export const getTransactionCategories = async (): Promise<
  TransactionCategory[]
> => {
  const { data } = await dtMoneyApi.get("/transaction/categories");

  return data;
};

export const createTransaction = async (
  transaction: CreateTransactionInterface,
) => {
  await dtMoneyApi.post("/transaction", transaction);
};
