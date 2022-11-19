import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { TeamsModule } from './teams/teams.module';
import { UserModule } from './user/user.module';
import config from './utils/configOrm';

@Module({
  imports: [PlayerModule, TeamsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
