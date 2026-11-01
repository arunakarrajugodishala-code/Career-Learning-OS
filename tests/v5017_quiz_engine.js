'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(__dirname,'..','quiz-engine-v5017.js'),'utf8'),ctx);
const grade=ctx.CLOSQuizEngine.grade;
const q=[{choices:['A','B'],answer:1},{choices:['X','Y','Z'],answer:0}];
const tests=[
['all correct',()=>{let r=grade(q,[1,0]);assert.equal(r.correct,2);assert.equal(r.complete,true)}],
['wrong answers',()=>assert.equal(grade(q,[0,2]).correct,0)],
['partial answers do not count as complete',()=>{let r=grade(q,[1,null]);assert.equal(r.unanswered,1);assert.equal(r.complete,false)}],
['empty answer',()=>assert.equal(grade(q,['',0]).unanswered,1)],
['answer count mismatch',()=>assert.throws(()=>grade(q,[1]))],
['out-of-range answer',()=>assert.throws(()=>grade(q,[2,0]))],
['fractional answer',()=>assert.throws(()=>grade(q,[1.5,0]))],
['invalid answer key',()=>assert.throws(()=>grade([{choices:['A'],answer:2}],[0]))],
['empty bank',()=>assert.throws(()=>grade([],[]))],
['no string coercion',()=>assert.throws(()=>grade(q,['1',0]))]
];for(const [name,run] of tests){run();console.log('PASS',name)}console.log(JSON.stringify({passed:tests.length,failed:0}));
