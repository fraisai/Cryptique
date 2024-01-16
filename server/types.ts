import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export type WatchlistInterface = {
    addCard?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>,
    getCard?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>,
    deleteCard?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>,
    patchCrypto?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>
}

const watchListCrudController: WatchlistInterface = {}
