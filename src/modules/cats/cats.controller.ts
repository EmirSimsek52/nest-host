import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './ create-cat.dto';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    return this.catsService.getAllCats();
  }

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.getCatById(id);
  }

  @Post(':name')
  getCatByName(@Param('name') name: string) {
    return this.catsService.getCatByName(name);
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }
}
