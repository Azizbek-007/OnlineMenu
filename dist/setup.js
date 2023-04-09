"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const app_module_1 = require("./app.module");
function setup(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }));
    app.enableCors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    });
    app.use(cookieParser(process.env.APP_SECRET));
    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    return app;
}
exports.setup = setup;
//# sourceMappingURL=setup.js.map