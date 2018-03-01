#!/usr/bin/env node

import 'babel-polyfill'
import commander from 'commander';

import pkg from '../package.json';
import showRepos from './request';

commander
  .version(pkg.version)
  .description('Search repositories from github users');

commander
  .option('-U, --user <user>', 'Username to fetch repositories from')
  .description('Buscar repositorios de um usuário')
  .parse(process.argv);

showRepos(commander.user);
