import { Body, Controller, Post, UseGuards, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MovienoteService } from './movienote.service';
import { CreateMovienoteDto } from './dto/create-movienote.dto';

@Controller('movienote')
export class MovienoteController {
  constructor(private readonly movienoteService: MovienoteService) {}

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() createMovienoteDto: CreateMovienoteDto, @Request() req) {
    const userId = req.user.userId;
    return this.movienoteService.createNote(userId, createMovienoteDto.movieId, createMovienoteDto.noteTitle, createMovienoteDto.description);
  }
}
