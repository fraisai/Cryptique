import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export type WatchlistInterface = {
    addCard?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>,
    getCard?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>,
    deleteCard?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>,
    patchCrypto?: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>
}

const watchListCrudController: WatchlistInterface = {}

// Quick Types and Interface Generator: https://app.quicktype.io/
export type CoinType = {
    id:                                      string;
    symbol:                                  string;
    name:                                    string;
    image:                                   string;
    current_price:                           number;
    market_cap:                              number;
    market_cap_rank:                         number;
    fully_diluted_valuation:                 number;
    total_volume:                            number;
    high_24h:                                number;
    low_24h:                                 number;
    price_change_24h:                        number;
    price_change_percentage_24h:             number;
    market_cap_change_24h:                   number;
    market_cap_change_percentage_24h:        number;
    circulating_supply:                      number;
    total_supply:                            number;
    max_supply:                              number;
    ath:                                     number;
    ath_change_percentage:                   number;
    ath_date:                                Date;
    atl:                                     number;
    atl_change_percentage:                   number;
    atl_date:                                Date;
    roi:                                     null;
    last_updated:                            Date;
    sparkline_in_7d:                         SparklineIn7D;
    price_change_percentage_1h_in_currency:  number;
    price_change_percentage_1y_in_currency:  number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_30d_in_currency: number;
    price_change_percentage_7d_in_currency:  number;
}

export type SparklineIn7D = {
    price: number[];
}