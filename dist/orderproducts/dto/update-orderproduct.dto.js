"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderproductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_orderproduct_dto_1 = require("./create-orderproduct.dto");
class UpdateOrderproductDto extends (0, mapped_types_1.PartialType)(create_orderproduct_dto_1.CreateOrderproductDto) {
}
exports.UpdateOrderproductDto = UpdateOrderproductDto;
//# sourceMappingURL=update-orderproduct.dto.js.map