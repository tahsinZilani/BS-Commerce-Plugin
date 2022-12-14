import { Module } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { ResolveGraphqlModule } from './internal/graphql/graphql.module.resolver';
import { ResolveRestModule } from './internal/rest/rest.module.resolver';
import { coreConfig } from 'config/core';
import { PluginModules } from './plugin-module-system/index';
@Module({
  imports: [
    ...PluginModules,
    HelperModule,
    ...((coreConfig.api === 'GRAPHQL') ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule { }
