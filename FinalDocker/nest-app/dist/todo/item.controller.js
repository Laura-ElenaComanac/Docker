"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item.service");
const item_interface_1 = require("./item.interface");
const create_item_dto_1 = require("./create-item.dto");
const item_ws_gateway_1 = require("./item-ws.gateway");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ItemController = class ItemController {
    constructor(itemService, itemWsGateway) {
        this.itemService = itemService;
        this.itemWsGateway = itemWsGateway;
    }
    async findAll() {
        return this.itemService.findAll();
    }
    async findOne(id) {
        const item = this.itemService.findOne(id);
        if (!item) {
            throw new common_1.NotFoundException();
        }
        return item;
    }
    async create(dto) {
        const item = this.itemService.create(dto);
        this.itemWsGateway.broadcast({ event: 'created', payload: item });
        return item;
    }
    async update(item) {
        const dbItem = this.itemService.findOne(item.id);
        if (!dbItem) {
            throw new common_1.GoneException();
        }
        if (dbItem.version > item.version) {
            throw new common_1.ConflictException();
        }
        const updatedItem = this.itemService.update(Object.assign(Object.assign({}, item), { version: item.version + 1 }));
        this.itemWsGateway.broadcast({ event: 'updated', payload: updatedItem });
        return updatedItem;
    }
    async delete(id) {
        const item = this.itemService.findOne(id);
        if (!item) {
            throw new common_1.GoneException();
        }
        this.itemService.delete(id);
        this.itemWsGateway.broadcast({ event: 'updated', payload: id });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItem]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_interface_1.Item]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "delete", null);
ItemController = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('api/item'),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        item_ws_gateway_1.ItemWsGateway])
], ItemController);
exports.ItemController = ItemController;
//# sourceMappingURL=item.controller.js.map