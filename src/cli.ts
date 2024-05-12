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
  .parse(process.argv);

const options = program.opts();
writeFileSync(path.join(process.cwd(), options.output), createBuffer({ seed: options.seed }));
