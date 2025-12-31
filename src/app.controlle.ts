import { Controller, Get } from "@nestjs/common";


@Controller() //jika ingin menambahkan prefix maka tambahkan di sini
export class AppController {
  @Get()
  getRootRoute() {
    return 'Hello tod!';
  }
  @Get('/test')
  getTestPage() {
    return 'Hello ges!';
  }
}