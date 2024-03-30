import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() { }

    register() {
        return {
            name: "Max",
        }
    }
}
