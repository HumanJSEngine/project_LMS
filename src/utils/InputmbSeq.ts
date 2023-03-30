interface attendProps {
  attendLists: string[];
}

export const InputmbSeq = (attendLists): attendProps => {
  let arr = [];
  attendLists.forEach(item => {
    item.list.forEach(temp => {
      return (temp.mbSeq = item.mbSeq);
    });
    return arr.push([...item.list]);
  });
  return arr;
};
