import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const appConfigWithAnimations = {
  ...appConfig, // Preserva outras configurações que você já tenha
  providers: [
    ...appConfig.providers, // Se já houver providers, mescle-os
    provideAnimations(), // Adiciona o provider para animações
  ],
};

bootstrapApplication(AppComponent, appConfigWithAnimations).catch((err) =>
  console.error(err)
);
