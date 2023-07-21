import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {

    @Get()
    helloworld() {
        return 'Hello Felipe 3'
    }
}
