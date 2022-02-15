import contributors from '@dianmora/contributors';

const token = process.env.TOKEN;

const excludebots = [
  'verdacciobot',
  'dependabot-preview[bot]',
  'dependabot[bot]',
  '64b2b6d12bfe4baae7dad3d01',
  'greenkeeper[bot]',
  'snyk-bot',
  'allcontributors[bot]',
  'renovate[bot]',
  'undefined',
  'renovate-bot',
];

(async () => {
  try {
    // Awesome script made by https://github.com/dianmorales
    const result = await contributors({
      token: token,
      organization: 'verdaccio',
      excludebots,
      allowFork: false,
      allowPrivateRepo: false,
    });
    // eslint-disable-next-line no-console
    console.log('JSON', JSON.stringify(result, null, 4));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('error on update', err);
    process.exit(1);
  }
})();
