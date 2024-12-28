import { Module } from '@nestjs/common';
import { AlarmsModule } from './alarms/application/alarms.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOption } from './common/interfaces/application-bootstrap-option.interface';
import { AlarmInfrastructureModule } from './alarms/infrastructure/alarm-infrastructure.module';
import { PostsModule } from './posts/posts.module';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoreModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static register(options: ApplicationBootstrapOption) {
    return {
      module: AppModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useClass: TypeOrmConfigService,
          dataSourceFactory: async (options: DataSourceOptions) => {
            return new DataSource(options).initialize();
          },
        }),
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastructure(AlarmInfrastructureModule.use('orm')),
      ],
    };
  }
}
