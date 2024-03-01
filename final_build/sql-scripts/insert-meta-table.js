"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_meta_table = void 0;
exports.insert_meta_table = `INSERT INTO meta(id, name, symbol, _desc, homepage_url, img, jsonb_meta) VALUES($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (id) DO NOTHING RETURNING *`;
//# sourceMappingURL=insert-meta-table.js.map