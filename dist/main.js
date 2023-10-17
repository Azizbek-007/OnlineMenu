"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const setup_1 = require("./setup");
!(async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        snapshot: true,
        bodyParser: true,
    });
    (0, setup_1.setup)(app);
    await app.listen(process.env.PORT || 3000, 'localhost', async () => {
        console.log(`Application is running on: ${await app.getUrl()}`);
    });
})();
//# sourceMappingURL=main.js.map