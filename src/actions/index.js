export const initState = {
  fname: '',
  lname: '',
  fatherName: ''
};

export const addRecord = data => {
  return {
    type: 'add',
    payload: { id: new Date().getTime().toString(), data: data }
  };
};

export const deleteRecord = id => {
  return {
    type: 'delete',
    payload: id
  };
};

export const updateRecord = (data, index) => {
  return {
    type: 'update',
    payload: { data: data, index: index }
  };
};
