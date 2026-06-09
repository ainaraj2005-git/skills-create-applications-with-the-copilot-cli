#!/usr/bin/env node
const readline = require('readline');

function safeEval(expr){
  if(!/^[0-9+\-*/%^().\s]+$/.test(expr)) throw new Error('Invalid characters');
  const js = expr.replace(/\^/g,'**');
  return Function(`"use strict"; return (${js})`)();
}

function sum(nums){ return nums.reduce((a,b)=>a+b,0); }
function product(nums){ return nums.reduce((a,b)=>a*b,1); }

const argv = process.argv.slice(2);
if(argv.length === 0){
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: 'calc> ' });
  rl.prompt();
  rl.on('line', line => {
    const s = line.trim();
    if(!s){ rl.prompt(); return; }
    if(s === 'exit' || s === 'quit'){ rl.close(); return; }
    try{ console.log(safeEval(s)); } catch(e){ console.error('Error:', e.message); }
    rl.prompt();
  }).on('close', ()=>process.exit(0));
  return;
}

const [cmd, ...rest] = argv;
switch(cmd){
  case 'add':
  case 'sum': {
    const nums = rest.map(Number);
    if(nums.some(isNaN)){ console.error('All arguments must be numbers'); process.exit(1); }
    console.log(sum(nums));
    break;
  }
  case 'mul':
  case 'product':
  case 'multiply': {
    const nums = rest.map(Number);
    if(nums.some(isNaN)){ console.error('All arguments must be numbers'); process.exit(1); }
    console.log(product(nums));
    break;
  }
  case 'sub':
  case 'subtract': {
    const a = Number(rest[0]); const b = Number(rest[1]);
    if(isNaN(a) || isNaN(b)){ console.error('Two numeric arguments required'); process.exit(1); }
    console.log(a - b);
    break;
  }
  case 'div':
  case 'divide': {
    const a = Number(rest[0]); const b = Number(rest[1]);
    if(isNaN(a) || isNaN(b)){ console.error('Two numeric arguments required'); process.exit(1); }
    if(b === 0){ console.error('Error: Cannot divide by zero'); process.exit(1); }
    console.log(a / b);
    break;
  }
  case 'mod': {
    const a = Number(rest[0]); const b = Number(rest[1]);
    if(isNaN(a) || isNaN(b)){ console.error('Two numeric arguments required'); process.exit(1); }
    console.log(a % b);
    break;
  }
  default: {
    const expr = [cmd, ...rest].join(' ');
    try{ console.log(safeEval(expr)); } catch(e){ console.error('Error:', e.message); process.exitCode = 1; }
  }
}
