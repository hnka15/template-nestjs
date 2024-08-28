// Este arquivo serve para configurar o watch do pm2 para escutar as alterações e atualizar a aplicação automaticamente
// ele está ouvindo alterações em todas as pastas exceto node_modules, .git e logs
// para rodar a aplicação com o pm2, execute: pm2 start config/datalog.watch.config.js
module.exports = {
  apps: [
    {
      name: 'portal-back',
      script: './dist/main.js',
      watch: true,
      watch_delay: 1000,
      ignore_watch: ['node_modules', '\\.git', 'logs'],
    },
  ],
}
