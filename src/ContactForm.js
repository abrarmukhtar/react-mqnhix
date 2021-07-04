import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initState, addRecord, updateRecord } from './actions/index';
import firebase from './fire';
const ContactForm = props => {
  // const initData = {
  //   fname: '',
  //   lname: '',
  //   fatherName: ''
  // };
  const formData = useSelector(state => state.formReducer.newData);

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState(initState);

  const inputEvent = e => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });
  };

  useEffect(() => {
    if (props.edit.currentId === '') {
    } else {
      const indexs = formData.findIndex(elm => elm.id === props.edit.currentId);
      setInputData(formData[indexs].data);
    }
  }, [props.edit.currentId]);

  const submitEvent = e => {
    e.preventDefault();

    dispatch(addRecord(inputData));
    firebase
      .database()
      .ref('information')
      .push(inputData);
    setInputData(initState);

    // if (inputData.lname == '' || inputData.fname == '') {
    // } else {
    //   props.addorEdit(inputData);
    //   setInputData(initData);
    // }
    document.getElementById('fname').focus();
  };

  const UpdateRecords = e => {
    e.preventDefault();

    const updated = {
      id: props.edit.currentId,
      data: inputData
    };

    dispatch(updateRecord(updated));

    props.edit.setCurrentId('');
    setInputData(initState);
    // if (confirm('Do you want to update')) {
    //   props.addorEdit(inputData);
    document.getElementById('fname').focus();
    // } else {
    // }
  };

  const clearContant = () => {
    // setInputData(initData);
    // props.setCurrentId('');
  };
  return (
    <form
      onSubmit={props.edit.currentId === '' ? submitEvent : UpdateRecords}
      autoComplete="off"
    >
      <div className="col-md-6">
        <label className="form-label">First Name *</label>
        <input
          type="text"
          name="fname"
          className="form-control"
          id="fname"
          onChange={inputEvent}
          value={inputData.fname}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Last Name *</label>
        <input
          type="text"
          name="lname"
          className="form-control"
          id="lname"
          onChange={inputEvent}
          value={inputData.lname}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Father Name *</label>
        <input
          type="text"
          name="fatherName"
          className="form-control"
          id="fatherName"
          onChange={inputEvent}
          value={inputData.fatherName}
          required
        />
      </div>

      <div className="col-12">
        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value={props.edit.currentId === '' ? 'Save' : 'update'}
          />
        </div>

        {/* <button className="btn btn-primary" onClick={clearContant}>
          Clear
        </button> */}
      </div>
    </form>
  );
};

export default ContactForm;
