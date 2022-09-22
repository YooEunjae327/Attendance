import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MemberModule } from './member/member.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnectService } from './database/mysqlConnect.service';
import { AttendModule } from './attend/attend.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [DatabaseModule],
      useClass: MysqlConnectService,
      inject: [MysqlConnectService],
    }),
    MemberModule,
    DatabaseModule,
    AttendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
