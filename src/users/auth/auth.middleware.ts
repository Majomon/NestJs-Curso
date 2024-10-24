import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Middleware auth", req.originalUrl);

    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('No autorizado', HttpStatus.BAD_REQUEST);
    }

    if (authorization !== '123') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
