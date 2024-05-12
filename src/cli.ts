#!/usr/bin/env node

import { program } from 'commander';
import { writeFileSync } from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { createBuffer } from './blockies';

// Usage:
// npx blockies-typed --output image.png --seed this_is_my_seed

const defaultSeed = uuid();

program
  .name('blockies-typed')
  .description('Generate blocky images')
  .option('-o, --output <output>', 'Output file', `${defaultSeed}.png`)
  .option('-s, --seed <seed>', 'Seed for random generation', defaultSeed)
  .option('-n, --number <number>', 'Number of images to generate', '1')
  .parse(process.argv);

const options = program.opts();
for (let i = 0; i < Number(options.number); i++) {
  writeFileSync(path.join(process.cwd(), options.output), createBuffer({ seed: options.seed }));
}
