#!/usr/bin/env node

import { program } from 'commander';
import { writeFileSync } from 'fs';
import path from 'path';
import { createBuffer, createDataURL } from './blockies';
import { v4 as uuid } from 'uuid';
// Usage:
// npx blockies-typed --output image.png --seed this_is_my_seed

const defaultSeed = uuid();

program
  .name('blockies-typed')
  .description('Generate blocky images')
  .option('-o, --output <output>', 'Output file', `${defaultSeed}.png`)
  .option('-s, --seed <seed>', 'Seed for random generation', defaultSeed)
  .parse(process.argv);

const { output, seed } = program.opts();
// writeFileSync(
//   path.join(process.cwd(), output),
//   Buffer.from(createDataURL({ seed }).split('base64,')[1], 'base64'),
// );
writeFileSync(path.join(process.cwd(), output), createBuffer({ seed }));
