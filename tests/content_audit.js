// Read-only curriculum inventory. Structural evidence only, not factual verification.
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..');
const ctx={window:{CLOS:{milestones:[]}}};vm.createContext(ctx);
const dataFiles=['data.js','topics-extra.js','roadmaps.js','deep-lessons.js','foundation-v4.js','mastery-v5.js','epr-v6.js','career-v7-data.js','career-v8-data.js','career-v9-data.js','career-v10-data.js','mastery-v11-data.js','review-v12-data.js',...Array.from({length:8},(_,i)=>`milestone-${i+13}.js`)];
const errors=[];
for(const f of dataFiles){if(f==='milestone-13.js')ctx.window.CLOS.milestones=[];try{vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f,timeout:2000});}catch(e){errors.push({file:f,error:String(e)});}}
const d=ctx.window.CLOS;
const inventory={coreTopics:d.topics?.length||0,careerOutlines:d.careers?.length||0,deepLessons:d.deepLessons?.length||0,foundationLessons:d.foundationV4?.length||0,eprUnits:d.eprV6?.length||0,appliedMilestones:d.milestones?.length||0};
const required=['objectives','prerequisites','beginner','intermediate','advanced','resources','video','examples','guided','assessment','project','mistakes','revision'];
const missing=[],unverified=[],weakAssessments=[],duplicates=[],brokenPrereqs=[];
const ids=new Set();for(const t of d.topics||[]){if(ids.has(t.id))duplicates.push(t.id);ids.add(t.id);for(const field of required){let v=t[field];if(v===undefined||v===null||(Array.isArray(v)&&v.length===0)||(typeof v==='string'&&!v.trim()))missing.push({id:t.id,field});}if(t.video?.reviewed!==true||!t.video?.url)unverified.push(t.id);if((t.assessment||[]).length<5)weakAssessments.push({id:t.id,questions:(t.assessment||[]).length});}
for(const t of d.topics||[])for(const p of t.prerequisites||[])if(!ids.has(p))brokenPrereqs.push({id:t.id,prerequisite:p});
const report={generatedAt:new Date().toISOString(),release:'2.2-audited-candidate',scope:'Static source inventory, not external content review or interactive testing',inventory,checks:{dataScriptErrors:errors,duplicateCoreTopicIds:duplicates,missingRequiredCoreFields:missing,unverifiedCoreVideos:unverified,weakCoreAssessmentBanks:weakAssessments,brokenCorePrerequisites:brokenPrereqs},releaseGate:'BLOCKED',externalReview:'NOT_TESTED',browserAndDeviceTests:'NOT_TESTED',automaticSync:'NOT_IMPLEMENTED',independentMastery:'NOT_IMPLEMENTED'};
fs.writeFileSync(path.join(root,'CONTENT-COVERAGE-AUDIT.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({inventory,counts:Object.fromEntries(Object.entries(report.checks).map(([k,v])=>[k,v.length])),releaseGate:report.releaseGate},null,2));
if(errors.length||duplicates.length||brokenPrereqs.length)process.exitCode=1;
