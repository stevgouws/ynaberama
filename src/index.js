import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import ynab from "ynab";

dotenv.config();

const ynabAPI = new ynab.API(process.env.YNAB_TOKEN);

const budgetsResponse = await ynabAPI.budgets.getBudgets();
const { budgets } = budgetsResponse.data;
for (const budget of budgets) {
  console.log(`Budget Name: ${budget.name}`);
}
