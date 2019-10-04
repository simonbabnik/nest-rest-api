import { ApiModelProperty } from '@nestjs/swagger';

export class CreateProductDto {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly price: number;

    @ApiModelProperty()
    readonly available: boolean;

    @ApiModelProperty()
    readonly dateCreated: Date;

}

//     @ApiModelProperty() je za swagger
