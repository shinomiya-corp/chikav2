function bootstrap() {
  switch (process.env.PROCESS_TYPE) {
    case 'chika':
      import('./chika');
      break;
    default:
      break;
  }
}

bootstrap();
