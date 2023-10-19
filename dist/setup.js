"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const connectPgSimple = require("connect-pg-simple");
const compression = require("compression");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
function setup(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }));
    app.use(cookieParser(process.env.APP_SECRET));
    app.use(session({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
        store: process.env.NODE_ENV === 'production'
            ? new (connectPgSimple(session))()
            : new session.MemoryStore(),
        cookie: {
            httpOnly: true,
            signed: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.enableCors({
        "origin": "*",
        "methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "credentials": true,
        "exposedHeaders": ['Authorization'],
        "optionsSuccessStatus": 200
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.use(compression());
    return app;
}
exports.setup = setup;
//# sourceMappingURL=setup.js.map