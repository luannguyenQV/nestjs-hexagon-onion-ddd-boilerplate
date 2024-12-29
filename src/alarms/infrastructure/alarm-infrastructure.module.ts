import { Module } from '@nestjs/common';
import { OrmPersistenceModule } from './persistence/orm/orm-persistence.module';

@Module({})
export class AlarmInfrastructureModule {
  static use(driver: 'orm') {
    // switch (driver) {
    //   case 'orm':
    return {
      module: AlarmInfrastructureModule,
      imports: [OrmPersistenceModule],
      exports: [OrmPersistenceModule],
    };
    // }
  }
}
