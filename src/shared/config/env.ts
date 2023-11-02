import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  urlDB: string;
}

export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  urlDB: process.env.DATABASE_URL,
});

const erros = validateSync(env);

if (erros.length > 0) {
  throw new Error(JSON.stringify(erros, null, 2));
}
