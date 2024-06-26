import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RequestService } from "src/request.service";

@Injectable()
export class AuthenTicationMiddleWare implements NestMiddleware {
    constructor(private readonly requestService:RequestService) {}
    use(req: Request, res: Response, next: NextFunction) {        
        const userId  = '123'
        this.requestService.setUserId(userId)

        const user = this.requestService.getUserId();
        next();
    }
}