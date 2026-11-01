(function(root){'use strict';
function grade(questions,answers){
 if(!Array.isArray(questions)||!questions.length)throw Error('No questions available');
 if(!Array.isArray(answers)||answers.length!==questions.length)throw Error('Answer count mismatch');
 let correct=0,unanswered=0;
 for(let i=0;i<questions.length;i++){
  const q=questions[i],a=answers[i];
  if(!q||!Array.isArray(q.choices)||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length)throw Error('Invalid question '+(i+1));
  if(a===null||a===undefined||a===''){unanswered++;continue}
  if(!Number.isInteger(a)||a<0||a>=q.choices.length)throw Error('Invalid answer '+(i+1));
  if(a===q.answer)correct++;
 }
 return {correct,total:questions.length,unanswered,complete:unanswered===0};
}
root.CLOSQuizEngine={grade};
})(typeof window!=='undefined'?window:globalThis);
