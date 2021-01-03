import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CharacterService } from './characters/character.service';
import { SpellService } from './spells/spell.service';
import { RaceService } from './races/race.service';

@NgModule({
    providers: [
        CharacterService,
        SpellService,
        RaceService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
          }
    ]
})
export class CoreModule {}