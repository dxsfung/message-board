import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
actions: {
  questionFormShow() {
    this.set('addNewQuestion', true);
  },
  questionFormHide() {
    this.set('addNewQuestion', false);
  },
    saveQuestion1() {
    var params = {
      date: "",
      author: this.get('author') ? this.get('author') : "",
      content: this.get('content') ? this.get('content') : "",
      notes: this.get('notes') ? this.get('notes') : "",
    };
    this.set('addNewQuestion', false);
    this.sendAction('saveQuestion2', params);
    this.set('date', "");
    this.set('author', "");
    this.set('content', "");
    this.set('notes', "");
  }
}

});
