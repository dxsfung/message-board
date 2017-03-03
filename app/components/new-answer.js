import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    answerFormHide() {
      this.set('addNewAnswer', false);
    },
    saveAnswer() {
     var params = {
       author: this.get('author') ? this.get('author') : "",
       content: this.get('content') ? this.get('content') : "",
       votes: 0,
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }

  }
});
