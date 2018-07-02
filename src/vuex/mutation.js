const mutation = {
  setSurveyNoActive(state,str){
     state.surveyNo = str;
  },
  setCaseDetailActive(state, obj) {
    state.caseDetailActive = obj
  },
  setInsititutEditorActive(state, obj) {
    state.insititutEditorActive = obj
  },
  setHeaderActive(state, obj) {
    state.headerActive = obj
  },
  setSignSeatsActive(state, obj) {
    state.signSeatsActive = obj
  },
  getsurveyOrderId(state, obj) {
    state.surveyOrderId = obj
  },
  getcaseListActive(state, obj) {
    state.caseListActive = obj
  },
  getclickEditorActive(state, obj) {
    state.clickEditorActive = obj
  },
  getinsitituPageno(state, obj) {
    state.insitituPageno = obj
  },
}

export default mutation
