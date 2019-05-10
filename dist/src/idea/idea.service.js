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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const idea_entity_1 = require("./idea.entity");
let IdeaService = class IdeaService {
    constructor(ideaRepository) {
        this.ideaRepository = ideaRepository;
    }
    showAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ideaRepository.find();
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const idea = yield this.ideaRepository.create(data);
            yield this.ideaRepository.save(idea);
            return idea;
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ideaRepository.findOne({ where: { id } });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ideaRepository.update({ id }, data);
            return yield this.ideaRepository.findOne({ where: { id } });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ideaRepository.delete({ id });
            return { deleted: true };
        });
    }
};
IdeaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(idea_entity_1.IdeaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], IdeaService);
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map