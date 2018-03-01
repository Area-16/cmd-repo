import reqPromise from 'request-promise';

import ora from 'ora';
import chalk from 'chalk';

const spinner = ora({
  text: 'Fetching user repos...',
  color: 'magenta',
});

async function searchRepos(user) {
  spinner.start();
  const options = {
    uri: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    json: true,
  };

  const repositories = await reqPromise(options);
  spinner.stop();
  return repositories;
}

async function showRepos(user = 'dougtq') {
  try {
    const repos = await searchRepos(user.toString());
    repos.map(repo => console.info(chalk.blue(repo.name)));
  } catch (err) {
    console.error(chalk.red('Sorry, an error ocurred. Try again!'));
  }
}

export default showRepos;
