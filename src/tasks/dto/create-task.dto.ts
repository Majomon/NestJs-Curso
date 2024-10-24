import { IsString, MinLength } from "class-validator";

// Este archivo vendria a ser una interfas
export class CreateTaskDto {
  //Decoradores
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;
}
