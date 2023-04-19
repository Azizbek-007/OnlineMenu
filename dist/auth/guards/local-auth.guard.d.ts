import { ExecutionContext } from '@nestjs/common';
declare const LocalAuthGuard_base: any;
export declare class LocalAuthGuard extends LocalAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
