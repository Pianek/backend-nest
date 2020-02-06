import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService, CatsService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

/*   @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  } */

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }


  @Get('ab*cd')
  findAllAbcd() {
    return 'This route uses a wildcard';
  }

}