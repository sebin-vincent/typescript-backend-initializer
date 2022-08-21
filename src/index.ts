import { Division } from './math/division';
import dotenv from 'dotenv-safe';

dotenv.config();
const operation = new Division();

const answer = operation.divide();
console.log(answer);
