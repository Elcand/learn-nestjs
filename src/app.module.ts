import { Module } from "@nestjs/common";
import { AppController } from "./app.controlle";

@Module({
  controllers: [AppController],
})
export class AppModule {}