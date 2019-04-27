"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const idea_controller_1 = require("./idea.controller");
const idea_service_1 = require("./idea.service");
const idea_entity_1 = require("./idea.entity");
let IdeaModule = class IdeaModule {
};
IdeaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([idea_entity_1.IdeaEntity])],
        controllers: [idea_controller_1.IdeaController],
        providers: [idea_service_1.IdeaService],
    })
], IdeaModule);
exports.IdeaModule = IdeaModule;
//# sourceMappingURL=idea.module.js.map