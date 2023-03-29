export const GetRnumList = (RScoreLists, name) => {
  let numArr = RScoreLists.find(item => item.smasName === name).list;
  return numArr;
};
