import { Module } from '@nestjs/common';
import { ShopkeepersService } from './shopkeepers.service';
import { ShopkeepersController } from './shopkeepers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopkeeperSchema } from './entities/shopkeeper.entity';
import { ShopkeeperRepository } from './shopkeeper.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'shopkeepers', schema: ShopkeeperSchema },
    ]),
  ],
  controllers: [ShopkeepersController],
  providers: [ShopkeepersService, ShopkeeperRepository],
  exports: [ShopkeeperRepository],
})
export class ShopkeepersModule {}
